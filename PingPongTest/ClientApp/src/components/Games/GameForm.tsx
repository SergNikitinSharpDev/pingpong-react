import React from 'react';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';
import { Game, Player } from '../../models';
import { useState, useEffect } from 'react';
import { Label } from 'reactstrap';

type OwnProps = { 
    game?: Game;
    addGame: (game: Game) => void;
    updateGame: (game: Game) => void;
    unselectGame: () => void;
    players: Player[];
}

export function GameForm (props: OwnProps) {
    const [date, setDate] = useState('')
    const [formError, setFormError] = useState(false)
    const [player1Id, setPlayer1] = useState()
    const [player2Id, setPlayer2] = useState()
    const [playerScore1, setScore1] = useState(0)
    const [playerScore2, setScore2] = useState(0)

    useEffect(() => {
        let game = props.game;
        if (props.players && props.players.length > 0) {
            const id1 = game ? game.player1Id :  props.players[0].id;
            setPlayer1(id1);
            const id2 = game ? game.player2Id :  props.players[0].id;
            setPlayer2(id2);
        }
        if (props.game) {
            setScore1(game!.playerScore1);
            setScore2(game!.playerScore2);
            setDate(game!.date.split('T')[0]);
        }
    }, [props]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (date && player1Id !== player2Id && playerScore1 != playerScore2) {
            const game: Game = {
                date,
                player1Id,
                player2Id,
                playerScore1,
                playerScore2
            };
            if (props.game) {
                game.id = props.game.id;
                game.winnerId = playerScore1 > playerScore2 ? player1Id : player2Id;
                props.updateGame(game);
            } else {
                props.addGame(game);
            }
            clearFormHandle();
        } else {
            setFormError(true);
        }
    }

    const clearFormHandle = () => {
        if (props.game) {
            setDate('');
            setScore1(0);
            setScore2(0);
            props.unselectGame();
        }
        setFormError(false);
    }

    return (
        <React.Fragment>
            <Form className="form-inline mb-2">
                <FormGroup className="mr-3">
                    <Label className="mr-1">Date</Label>
                    <Input value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        name="name" 
                        type="date"
                        placeholder="Player name" />
                </FormGroup>
                <FormGroup className="mr-3">
                    <Label className="mr-1">Player1</Label>
                    <Input value={player1Id} onChange={(e) => setPlayer1(+e.target.value)}  type="select">
                        {props.players.map((p: Player, index: number) => <option key={"p1"+index} value={p.id}>{p.name}</option>)}
                    </Input>
                </FormGroup>
                <FormGroup className="mr-3">
                    <Label className="mr-1">Player2</Label>
                    <Input  value={player2Id} onChange={(e) => setPlayer2(+e.target.value)} type="select">
                        {props.players.map((p: Player, index: number) => <option key={"p2"+index} value={p.id}>{p.name}</option>)}
                    </Input>
                </FormGroup>
                <FormGroup className="mr-3">
                    <Label className="mr-1">Score Player1</Label>
                    <Input value={playerScore1} 
                        onChange={(e) => setScore1(+e.target.value)} 
                        type="number"
                        min="0" max="100"
                        />
                </FormGroup>
                <FormGroup className="mr-3">
                    <Label className="mr-1">Score Player2</Label>
                    <Input value={playerScore2} 
                        type="number"
                        min="0" max="100"
                        onChange={(e) => setScore2(+e.target.value)} 
                        />
                </FormGroup>
            </Form>
            {formError && <div className="error">Fields are filled incorrectly</div>}
            <div className="mb-2">
                <Button className="mr-2" onClick={clearFormHandle}>Clear</Button>
                <Button onClick={handleSubmit}>{ props.game ? 'Save' : 'Add'}</Button>
            </div>
        </React.Fragment>
    )
  
  }