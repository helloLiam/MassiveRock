namespace Digb.Service
{
    using Digb.Model;
    using System;

    public interface IUserService
    {
        public Boolean SignUp(SignUpInfo data);
    }
}
