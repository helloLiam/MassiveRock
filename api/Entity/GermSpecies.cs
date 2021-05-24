namespace Digb.Entity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class GermSpecies
    {
        public Guid Id { get; set; }

        public String Kingdom { get; set; }

        public String Phylum { get; set; }

        public String Class { get; set; }

        public String Order { get; set; }

        public String Family { get; set; }

        public String Genus { get; set; }

        public String Species { get; set; }
    }
}
