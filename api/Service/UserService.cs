namespace Digb.Service
{
    using Digb.Model;
    using System;

    public class UserService : IUserService
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
