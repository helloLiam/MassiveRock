namespace Digb.Service
{
    using Digb.Model;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class SearchService
    {
        public String GermSearch(String germName)
        {
            if (germName.Equals(""))
            {
                return null;
            }
            var germPrefix = germName.Substring(0,3);
            
            switch (germPrefix)
            {
                case "k__":
                    break;
                case "p__":
                    break;
                case "c__":
                    break;
                case "o__":
                    break;
                case "f__":
                    break;
                case "g__":
                    break;
                case "s__":
                    break;
            }
            
            
        }
    }
}
