namespace Digb.Entity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class UserInfo
    {
        public Guid Id { get; set; }

        public String Email { get; set; }

        public String PhoneNumber { get; set; }

        public String Country { get; set; }

        public String Position { get; set; }

        public Int32 UserStatus { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime UpdateTime { get; set; }
    }
}
