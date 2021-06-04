namespace Digb.Entity
{
    using System;

    public class UserProfile
    {
        public Guid Id { get; set; }

        public Guid ExperimentalId { get; set; }

        public Int32 UserType { get; set; }

        public String LoginName { get; set; }

        public Byte[] Password { get; set; }

        public Int32 UserStatus { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime UpdateTime { get; set; }
    }
}
