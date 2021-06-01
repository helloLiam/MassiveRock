namespace Digb.Service
{
    using Digb.Entity;
    using Digb.Utility;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Cryptography;
    using System.Text;
    using System.Threading.Tasks;

    public class InitializeDBService
    {
        public FastaMapper FastaMapper { get; set; } = new FastaMapper();
        public void InitializeDB(ResourceDBContext context)
        {
            //this.InitializeGlobalGermSchedule(context);
            this.InitializeHouseflySchedule(context);
            this.InitializeMosquitoesSchedule(context);
            this.InitializeFruitflySchedule(context);
            this.InitializeCockroachSchedule(context);
        }

        public void InitializeGlobalGermSchedule(ResourceDBContext context)
        {
            if (context.GlobalGerm.Any())
            {
                // DB has been seeded
                return;
            }
            // C:\\GitHub\\GlobalGerm\\30_taxonomy_fasta.txt
            var globalGermData = FastaMapper.GlobalGermMapper("30_taxonomy_fasta");
            foreach (var data in globalGermData)
            {
                context.GlobalGerm.Add(data);
            }
            context.SaveChanges();
        }

        public void InitializeHouseflySchedule(ResourceDBContext context)
        {
            if (context.Housefly.Any())
            {
                // DB has been seeded
                return;
            }
            // Housefly.txt
            var houseflyData = FastaMapper.HouseflyMapper("Housefly");
            foreach (var data in houseflyData)
            {
                context.Housefly.Add(data);
            }
            context.SaveChanges();
        }

        public void InitializeMosquitoesSchedule(ResourceDBContext context)
        {
            //if (context.Mosquitoes.Any())
            //{
            //    // DB has been seeded
            //    return;
            //}
            // Mosquitoes.txt
            var mosquitoesData = FastaMapper.MosquitoesMapper("Mosquitoes");
            foreach (var data in mosquitoesData)
            {
                context.Mosquitoes.Add(data);
            }
            context.SaveChanges();
        }

        public void InitializeFruitflySchedule(ResourceDBContext context)
        {
            //if (context.Fruitfly.Any())
            //{
            //    // DB has been seeded
            //    return;
            //}
            // Fruitfly.txt
            var fruitflyData = FastaMapper.FruitflyMapper("Fruitfly");
            foreach (var data in fruitflyData)
            {
                context.Fruitfly.Add(data);
            }
            context.SaveChanges();
        }

        public void InitializeCockroachSchedule(ResourceDBContext context)
        {
            //if (context.Cockroach.Any())
            //{
            //    // DB has been seeded
            //    return;
            //}
            // Fruitfly.txt
            var cockroachData = FastaMapper.CockroachMapper("Cockroach");
            foreach (var data in cockroachData)
            {
                context.Cockroach.Add(data);
            }
            context.SaveChanges();
        }

        public Byte[] SHA256(String password)
        {
            var sha256 = new SHA256Managed();
            var Asc = new ASCIIEncoding();
            var tmpByte = Asc.GetBytes(password);
            var EncryptBytes = sha256.ComputeHash(tmpByte);
            sha256.Clear();
            return EncryptBytes;
        }
    }
}
