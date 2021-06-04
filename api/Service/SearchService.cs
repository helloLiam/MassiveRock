namespace Digb.Service
{
    using System;

    public class SearchService : ISearchService
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
            return "";
            
        }
    }
}
