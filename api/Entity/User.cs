namespace Digb.Entity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    public class User
    {
        public Guid Id { get; set; }

        public Guid ProfileId { get; set; }

        public String DisplayName { get; set; }

        public String LoginName { get; set; }

        public String Email { get; set; }

        public String PhoneNumber { get; set; }

        public String Password { get; set; }

    }
}
