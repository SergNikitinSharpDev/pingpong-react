using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace PingPongTest.Models
{
    public class Game
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Player1Id { get; set; }
        [JsonIgnore]
        public Player Player1 { get; set; }
        public int Player2Id { get; set; }
        [JsonIgnore]
        public Player Player2 { get; set; }

        public int PlayerScore1 { get; set; }
        public int PlayerScore2 { get; set; }

        public int WinnerId { get; set; }
        [JsonIgnore]
        public Player Winner { get; set; }
    }
}
