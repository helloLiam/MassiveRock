namespace Digb.Api.Controllers
{
    using Digb.Model;
    using Digb.Service;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    [Route("user")]
    [ApiController]
    public class UserController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        [HttpPost("signup")]
        public Boolean SignUp(SignUpInfo data)
        {
            return new UserService().SignUp(data);
        }
    }
}
