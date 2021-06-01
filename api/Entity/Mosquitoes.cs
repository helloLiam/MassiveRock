namespace Digb.Entity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Mosquitoes
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

        public Double Early_Day6 { get; set; }

        public Double Late_Day25 { get; set; }

        public Double Pupae_Day2 { get; set; }

        public Double Adult_Day5 { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime ModifiedTime { get; set; }
    }
}
