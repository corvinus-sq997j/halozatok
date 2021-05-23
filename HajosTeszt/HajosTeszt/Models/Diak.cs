using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace HajosTeszt.Models
{
    public partial class Diak
    {
        [Key]
        public int DiakAz { get; set; }


        public string Nev { get; set; }
        public DateTime? Szulido { get; set; }
    }
}
