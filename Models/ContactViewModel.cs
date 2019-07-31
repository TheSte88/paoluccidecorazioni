using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace paolucci_decorazioni
{
    public class ContactViewModel
    {
        [Required(ErrorMessage = "Il campo è obbligatorio")]
        [Display(Name ="Nome")]
        public string Name { get; set; }

        [Required (ErrorMessage = "Il campo è obbligatorio")]
        [Display(Name ="Cognome")]
        public string LastName { get; set; }

        [Required (ErrorMessage = "Il campo è obbligatorio")]
        [EmailAddress (ErrorMessage = "Il campo email non è valido")]
        [Display(Name ="Email")]
        public string Email { get; set; }

        [Required (ErrorMessage = "Il campo è obbligatorio")]
        [Phone]
        [Display(Name ="Numero di telefono")]
        public string Phone{ get; set; }

        [Required (ErrorMessage = "Il campo è obbligatorio")]
        [StringLength(255)]
        [Display(Name ="Scrivi qui il tuo messaggio")]
        public string Message{ get; set; }
    }
}
