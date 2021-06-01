namespace Digb.Service
{
    using Digb.Model;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class UserService
    {
        public Boolean SignUp(SignUpInfo data)
        {
            if (data.LoginName.Equals(""))
            {
                return false;
            }
            if (data.Password.Equals(""))
            {
                return false;
            }
            return true;
        }
    }
}
