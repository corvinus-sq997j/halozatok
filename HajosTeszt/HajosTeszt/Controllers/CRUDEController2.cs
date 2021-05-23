using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HajosTeszt.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/diak")]
    [ApiController]
    public class CRUDEController2 : ControllerBase
    {
        // GET: api/<CRUDEController2>
        [HttpGet]
        public IEnumerable<Diak> Get()
        {
            //return new string[] { "value1", "value2" };
            crudesq997jContext context = new crudesq997jContext();
            return context.Diaks.ToList();
        }

        // GET api/<CRUDEController2>/5
        [HttpGet("{azonosito}")]
        public Diak Get(int azonosito)
        {
            crudesq997jContext context = new crudesq997jContext();
            var keresettDiak = (from x in context.Diaks
                                where x.DiakAz == azonosito
                                select x).FirstOrDefault();
            return keresettDiak;
        }

        // POST api/<CRUDEController2>
        [HttpPost]
        public void Post([FromBody] Diak ujDiak)
        {
            crudesq997jContext context = new crudesq997jContext();
            context.Diaks.Add(ujDiak);
            context.SaveChanges();
        }

        // PUT api/<CRUDEController2>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CRUDEController2>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            crudesq997jContext context = new crudesq997jContext();
            var torlendoDiak = (from x in context.Diaks
                                where x.DiakAz == id
                                select x).FirstOrDefault();
            context.Remove(torlendoDiak);
            context.SaveChanges();
        }
    }
}
