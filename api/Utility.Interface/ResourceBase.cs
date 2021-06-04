namespace Digb.Utility
{
    using Microsoft.EntityFrameworkCore;

    public class ResourceBase : DbContext
    {
        public ResourceBase(DbContextOptions<ResourceBase> options) : base(options)
        {

        }
    }
}
