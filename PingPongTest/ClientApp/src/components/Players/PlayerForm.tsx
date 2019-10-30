import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';
import { Player } from '../../models';
import { useState, useEffect } from 'react';
import React from 'react';

type OwnProps = { 
    player?: Player;
    addPlayer: (name: string) => void;
    updatePlayer: (player: Player) => void;
    unselectPlayer: () => void;
}

export function PlayerForm (props: OwnProps) {
    const [name, setName] = useState('')

    useEffect(() => {
        if (props.player) {
            setName(props.player.name);
        } else {
            setName('');
        }
    }, [props]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (name) {
            if (props.player) {
                props.updatePlayer({...props.player, name});
            } else {
                props.addPlayer(name);
            }
            setName('');
        }

    }

    const clearFormHandle = () => {
        if (props.player) {
            props.unselectPlayer();
        }
        setName('');
    }

    return (
        <React.Fragment>
            <Form>
                <FormGroup>
                    <Input value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        name="name" 
                        placeholder="Player name" />
                </FormGroup>
            </Form>
            <div className="mb-2">
                <Button className="mr-2" onClick={clearFormHandle}>Clear</Button>
                <Button onClick={handleSubmit}>{ props.player ? 'Save' : 'Add'}</Button>
            </div>
        </React.Fragment>
    )
  
  }