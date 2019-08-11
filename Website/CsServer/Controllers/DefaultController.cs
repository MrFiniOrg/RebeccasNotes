using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CsServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultController : ControllerBase
    {
        // GET api/values
        //https://localhost:5001/api/Default
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(new string[] { "value1", "value2", "Rebecca is Cute" });
        }

        // GET api/values
        //https://localhost:5001/api/Default/badResponse/?requestCount=200
        //https://localhost:5001/api/Default/badResponse/?requestCount=300
        [HttpGet("badResponse")]
        public ActionResult<IEnumerable<string>> badResponse([FromQuery]int requestCount)
        {
            if (requestCount >= 200 && requestCount < 300)
                return Ok(new string[] { "value1", "value2", "Rebecca is Cute" });
            else
                return BadRequest("Uncle Fifi said that this is a crappy request.");
        }
    }
}
