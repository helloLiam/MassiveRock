namespace Digb.Entity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Housefly
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

        public Double Contrast_1 { get; set; }

        public Double Contrast_2 { get; set; }

        public Double Contrast_3 { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime UpdatedTime { get; set; }
    }
}
