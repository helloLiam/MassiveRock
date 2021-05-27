namespace Digb.Entity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    public class User
    {
        public Guid Id { get; set; }

        public Guid UserProfileId { get; set; }

        public Guid UserInfoId { get; set; }

        public Int32 UserStatus { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime UpdateTime { get; set; }
    }
}
