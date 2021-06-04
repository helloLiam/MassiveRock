namespace Digb.Utility
{
    using Digb.Entity;
    using Microsoft.EntityFrameworkCore;

    public class ResourceDBContext : ResourceBase
    {
        public DbSet<User> User { get; set; }

        public DbSet<UserProfile> UserProfile { get; set; }

        public DbSet<UserInfo> UserInfo { get; set; }

        public DbSet<Experimental> Experimental { get; set; }

        public DbSet<GlobalGerm> GlobalGerm { get; set; }

        public DbSet<Housefly> Housefly { get; set; }

        public DbSet<Mosquitoes> Mosquitoes { get; set; }

        public DbSet<Fruitfly> Fruitfly { get; set; }

        public DbSet<Cockroach> Cockroach { get; set; }

        public ResourceDBContext(DbContextOptions<ResourceBase> options) : base(options)
        {

        }
    }
}
