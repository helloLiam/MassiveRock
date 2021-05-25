namespace Digb.Service
{
    using Digb.Entity;
    using Digb.Utility;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class InitializeDBService
    {
        public FastaMapper FastaMapper { get; set; } = new FastaMapper();
        public void InitializeDB(ResourceDBContext context)
        {
            this.InitializeGlobalGermSchedule(context);
        }

        public void InitializeGlobalGermSchedule(ResourceDBContext context)
        {
            if (context.GlobalGerm.Any())
            {
                // DB has been seeded
                return;
            }
            // C:\\GitHub\\GlobalGerm\\30_taxonomy_fasta.txt
            var globalGerms = FastaMapper.GlobalGermMapper("30_taxonomy_fasta");
            foreach (GlobalGerm g in globalGerms)
            {
                context.GlobalGerm.Add(g);
            }
            context.SaveChanges();
        }
    }
}
