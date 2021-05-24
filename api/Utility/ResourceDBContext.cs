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

        public DbSet<Profile> Profile { get; set; }

        public DbSet<User> User { get; set; }

        public DbSet<GermSpecies> GermSpecies { get; set; }

        public ResourceDBContext(DbContextOptions<ResourceDBContext> options) : base(options)
        {

        }





    }
}
