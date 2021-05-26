namespace Digb.Utility
{
    using Digb.Entity;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;


    public class ResourceDBContext : DbContext
    {
        public DbSet<GlobalGerm> GlobalGerm { get; set; }

        public DbSet<Housefly> Housefly { get; set; }

        public DbSet<Mosquitoes> Mosquitoes { get; set; }

        public DbSet<Fruitfly> Fruitfly { get; set; }

        public DbSet<Cockroach> Cockroach { get; set; }

        public ResourceDBContext(DbContextOptions<ResourceDBContext> options) : base(options)
        {

        }





    }
}
