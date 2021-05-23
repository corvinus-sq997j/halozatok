using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HajosTeszt.Models;
using System.Web;
using System.Text;




namespace HajosTeszt.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class CRUDEController : ControllerBase
    {
        [HttpGet]
        [Route("diak/all")]
        public ActionResult M1()
        {
            crudesq997jContext d = new crudesq997jContext();
            var diakok = from x in d.Diaks select x.Nev;

            return new JsonResult(diakok);
        }
        [HttpGet]
        [Route("diak/azonositok")]
        public ActionResult Azonositok()
        {
            crudesq997jContext d = new crudesq997jContext();
            var diakok = from x in d.Diaks select x.DiakAz;

            return new JsonResult(diakok);
        }
        [HttpGet]
        [Route("diak/szulido")]
        public ActionResult Szulidiok()
        {
            crudesq997jContext d = new crudesq997jContext();
            var diakok = from x in d.Diaks select x.Szulido;

            return new JsonResult(diakok);
        }
        [HttpGet]
        [Route("diak/count")]
        public int M2() 
        {
            crudesq997jContext context = new crudesq997jContext();
            int kérdésekSzáma = context.Diaks.Count();

            return kérdésekSzáma;
        }
        [HttpGet]
        [Route("diak/{azonosito}")]
        public ActionResult M3(int azonosito)
        {
            crudesq997jContext context = new crudesq997jContext();
            var diakok = (from x in context.Diaks
                          where x.DiakAz == azonosito
                          select x).FirstOrDefault();

            if (diakok == null) return BadRequest("Nincs ilyen azonosítójú diák");

            return new JsonResult(diakok);
        }

    }
}
