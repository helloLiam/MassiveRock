namespace Digb.Utility
{
    using Digb.Entity;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class FastaMapper : IFastaMapper
    {
        public List<GlobalGerm> GlobalGermMapper(String filePath)
        {
            var fileData = System.IO.File.ReadAllText(@"C:\GitHub\MassiveRock\resources\30_taxonomy_fasta.txt");
            var splitData = fileData.Replace(";", "").Replace("\n", " ").Replace("\t", " ");
            var arrayData = splitData.Split(" ");
            var globalGermData = new List<GlobalGerm>();
            for (int i = 0; i < arrayData.Length; i += 9)
            {
                globalGermData.Add(new GlobalGerm()
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
            return globalGermData;
        }

        public List<Housefly> HouseflyMapper(String filePath)
        {
            var fileData = System.IO.File.ReadAllText(@"C:\GitHub\MassiveRock\resources\Housefly.txt");
            var splitData = fileData.Replace("\r\n", " ");
            var arrayData = splitData.Split(" ");
            var houseflyData = new List<Housefly>();
            for (int i = 0; i < arrayData.Length; i += 10)
            {
                houseflyData.Add(new Housefly()
                {
                    Id = i + 1,
                    Biol_Kingdom = arrayData[i],
                    Biol_Phylum = arrayData[i + 1],
                    Biol_Class = arrayData[i + 2],
                    Biol_Order = arrayData[i + 3],
                    Biol_Family = arrayData[i + 4],
                    Biol_Genus = arrayData[i + 5],
                    Biol_Species = arrayData[i + 6],
                    IsPrivate = 0,
                    IsPublished = 0,
                    Contrast_1 = Double.Parse(arrayData[i + 7]),
                    Contrast_2 = Double.Parse(arrayData[i + 8]),
                    Contrast_3 = Double.Parse(arrayData[i + 9]),
                    CreatedTime = DateTime.Now,
                    ModifiedTime = DateTime.Now
                });
            }
            return houseflyData;
        }

        public List<Mosquitoes> MosquitoesMapper(String filePath)
        {
            var fileData = System.IO.File.ReadAllText(@"C:\GitHub\MassiveRock\resources\Mosquitoes.txt");
            var splitData = fileData.Replace("\r\n", " ");
            var arrayData = splitData.Split(" ");
            var mosquitoesData = new List<Mosquitoes>();
            for (int i = 0; i < arrayData.Length; i += 9)
            {
                mosquitoesData.Add(new Mosquitoes()
                {
                    Id = i + 1,
                    Biol_Kingdom = "d__Bacteria",
                    Biol_Phylum = arrayData[i],
                    Biol_Class = arrayData[i + 1],
                    Biol_Order = arrayData[i + 2],
                    Biol_Family = arrayData[i + 3],
                    Biol_Genus = arrayData[i + 4],
                    Biol_Species = "s__",
                    IsPrivate = 0,
                    IsPublished = 0,
                    Early_Day6 = Double.Parse(arrayData[i + 5]),
                    Late_Day25 = Double.Parse(arrayData[i + 6]),
                    Pupae_Day2 = Double.Parse(arrayData[i + 7]),
                    Adult_Day5 = Double.Parse(arrayData[i + 8]),
                    CreatedTime = DateTime.Now,
                    ModifiedTime = DateTime.Now
                });
            }
            return mosquitoesData;
        }

        public List<Fruitfly> FruitflyMapper(String filePath)
        {
            var fileData = System.IO.File.ReadAllText(@"C:\GitHub\MassiveRock\resources\Fruitfly.txt");
            var splitData = fileData.Replace("\r\n", " ");
            var arrayData = splitData.Split(" ");
            var fruitflyData = new List<Fruitfly>();
            for (int i = 0; i < arrayData.Length; i += 17)
            {
                fruitflyData.Add(new Fruitfly()
                {
                    Id = i+1,
                    Biol_Kingdom = arrayData[i],
                    Biol_Phylum = arrayData[i+1],
                    Biol_Class = arrayData[i + 2],
                    Biol_Order = arrayData[i + 3],
                    Biol_Family = arrayData[i + 4],
                    Biol_Genus = arrayData[i + 5],
                    Biol_Species = arrayData[i + 6],
                    IsPrivate = 0,
                    IsPublished = 0,
                    Wild_1 = Double.Parse(arrayData[i + 7]),
                    Wild_2 = Double.Parse(arrayData[i + 8]),
                    Wild_4 = Double.Parse(arrayData[i + 9]),
                    Wild_5 = Double.Parse(arrayData[i + 10]),
                    Wild_3 = Double.Parse(arrayData[i + 11]),
                    Kdm5_1 = Double.Parse(arrayData[i + 12]),
                    Kdm5_2 = Double.Parse(arrayData[i + 13]),
                    Kdm5_4 = Double.Parse(arrayData[i + 14]),
                    Kdm5_5 = Double.Parse(arrayData[i + 15]),
                    Kdm5_3 = Double.Parse(arrayData[i + 16]),
                    CreatedTime = DateTime.Now,
                    ModifiedTime = DateTime.Now
                });
            }
            return fruitflyData;
        }

        public List<Cockroach> CockroachMapper(String filePath)
        {
            var fileData = System.IO.File.ReadAllText(@"C:\GitHub\MassiveRock\resources\Cockroach.txt");
            var splitData = fileData.Replace("\r\n", " ");
            var arrayData = splitData.Split(" ");
            var cockroachData = new List<Cockroach>();
            for (int i = 0; i < arrayData.Length; i += 28)
            {
                cockroachData.Add(new Cockroach()
                {
                    Id = i + 1,
                    Biol_Kingdom = arrayData[i],
                    Biol_Phylum = arrayData[i + 1],
                    Biol_Class = arrayData[i + 2],
                    Biol_Order = arrayData[i + 3],
                    Biol_Family = arrayData[i + 4],
                    Biol_Genus = arrayData[i + 5],
                    Biol_Species = arrayData[i + 6],
                    IsPrivate = 0,
                    IsPublished = 0,
                    Wild = this.DoubleConversion(new Double[] { Double.Parse(arrayData[i + 7]), Double.Parse(arrayData[i + 8]), Double.Parse(arrayData[i + 9]) }),
                    ControlDiet_5 = this.DoubleConversion(new Double[] { Double.Parse(arrayData[i + 10]), Double.Parse(arrayData[i + 11]), Double.Parse(arrayData[i + 12]) }),
                    HighProteinDiet_5 = this.DoubleConversion(new Double[] { Double.Parse(arrayData[i + 13]), Double.Parse(arrayData[i + 14]), Double.Parse(arrayData[i + 15]) }),
                    NoProteinDiet_5 = this.DoubleConversion(new Double[] { Double.Parse(arrayData[i + 16]), Double.Parse(arrayData[i + 17]), Double.Parse(arrayData[i + 18]) }),
                    ControlDiet_10 = this.DoubleConversion(new Double[] { Double.Parse(arrayData[i + 19]), Double.Parse(arrayData[i + 20]), Double.Parse(arrayData[i + 21]) }),
                    HighProteinDiet_10 = this.DoubleConversion(new Double[] { Double.Parse(arrayData[i + 22]), Double.Parse(arrayData[i + 23]), Double.Parse(arrayData[i + 24]) }),
                    NoProteinDiet_10 = this.DoubleConversion(new Double[] { Double.Parse(arrayData[i + 25]), Double.Parse(arrayData[i + 26]), Double.Parse(arrayData[i + 27]) }),
                    CreatedTime = DateTime.Now,
                    ModifiedTime = DateTime.Now
                });
            }
            return cockroachData;
        }

        public Double DoubleConversion(Double[] data)
        {
            var dataString = data.Average().ToString("0.000000");
            var result = Double.Parse(dataString);
            return result;
        }
    }
}
