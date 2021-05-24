using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace Digb.Api.Controller
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    [Route("blast")]
    [ApiController]
    public class BlastController : ControllerBase
    {
        /// <summary>
        /// Get 
        /// </summary>
        /// <returns></returns>
        [HttpGet("get")]
        public String Get()
        {
            return "aa";
        }
    }
}
