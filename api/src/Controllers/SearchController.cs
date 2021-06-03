namespace Digb.Api.Controllers
{
    using Digb.Service;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    [Route("search")]
    [ApiController]
    public class SearchController : Controller
    {
        public SearchController()
        {

        }
        //[EnableCors("CORS")]
        [HttpGet("germ")]
        public String GermSearch(String germName)
        {
            return new SearchService().GermSearch(germName);
        }

    }
}
