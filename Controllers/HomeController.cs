using System;
using System.Linq;
using System.Diagnostics;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using paolucci_decorazioni.Models;
using paolucci_decorazioni.Data;
using Microsoft.EntityFrameworkCore;

namespace paolucci_decorazioni.Controllers
{
    public class HomeController : Controller
    {
        PaolucciContext _ctx;
        public HomeController(PaolucciContext ctx){
            _ctx = ctx;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Preventivo(){
            return View();
        }

        public IActionResult Contatti(){
            var model = new ContactViewModel();
            return View(model);
        }
        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Contatti(ContactViewModel model){
            if(ModelState.IsValid){
                var c = new Contact {Name = model.Name, LastName = model.LastName, Email = model.Email, Phone = model.Phone, Message = model.Message };
                _ctx.Contacts.Add(c);
                //_ctx.SaveChange();

                return Json(model);
            }

            return Json("");
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
