namespace Digb.Entity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Cockroach
    {
        public Int32 Id { get; set; }

        public String Biol_Kingdom { get; set; }

        public String Biol_Phylum { get; set; }

        public String Biol_Class { get; set; }

        public String Biol_Order { get; set; }

        public String Biol_Family { get; set; }

        public String Biol_Genus { get; set; }

        public String Biol_Species { get; set; }

        public Int32 IsPrivate { get; set; }

        public Int32 IsPublished { get; set; }

        public Double Wild { get; set; }

        public Double CD_5 { get; set; }

        public Double HighProtein_5 { get; set; }

        public Double NoProtein_5 { get; set; }

        public Double CD_10 { get; set; }

        public Double HighProtein_10 { get; set; }

        public Double NoProtein_10 { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime UpdatedTime { get; set; }
    }
}