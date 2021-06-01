namespace Digb.Entity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Experimental
    {
        public Guid Id { get; set; }

        public String Title { get; set; }

        public String GermId { get; set; }

        public String Sequence { get; set; }

        public String Biol_Kingdom { get; set; }

        public String Biol_Phylum { get; set; }

        public String Biol_Class { get; set; }

        public String Biol_Order { get; set; }

        public String Biol_Family { get; set; }

        public String Biol_Genus { get; set; }

        public String Biol_Species { get; set; }

        public Int32 IsPublished { get; set; }

        public Int32 CheckStatus { get; set; }

        public String ExperimentCondition { get; set; }

        public Int32 UserStatus { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime UpdateTime { get; set; }
    }
}
