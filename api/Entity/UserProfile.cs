namespace Digb.Entity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class UserProfile
    {
        public Guid Id { get; set; }

        public Guid ExperimentalId { get; set; }

        public Int32 UserType { get; set; }

        public String LoginName { get; set; }

        public String Password { get; set; }

        public Int32 UserStatus { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime UpdateTime { get; set; }
    }
}
