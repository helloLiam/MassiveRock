namespace Digb.Utility
{
    using Digb.Entity;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class FastaMapper
    {
        public List<GlobalGerm> GlobalGermMapper(String filePath)
        {
            var fileData = System.IO.File.ReadAllText(@"C:\GitHub\GlobalGerm\30_taxonomy_fasta.txt");
            var splitData = fileData.Replace(";", "").Replace("\n", " ").Replace("\t", " ");
            var arrayData = splitData.Split(" ");
            var globalGerms = new List<GlobalGerm>();
            for (int i = 0; i < arrayData.Length; i += 9)
            {
                globalGerms.Add(new GlobalGerm()
                {
                    Id = new Guid(),
                    GermId = Int32.Parse(arrayData[i]),
                    Biol_Kingdom = arrayData[i + 1],
                    Biol_Phylum = arrayData[i + 2],
                    Biol_Class = arrayData[i + 3],
                    Biol_Order = arrayData[i + 4],
                    Biol_Family = arrayData[i + 5],
                    Biol_Genus = arrayData[i + 6],
                    Biol_Species = arrayData[i + 7],
                    Sequence = arrayData[i + 8],
                    IsMerged = 0,
                    CreatedTime = DateTime.Now,
                    ModifiedTime = DateTime.Now
                });
            }
            return globalGerms;
        }
    }
}
