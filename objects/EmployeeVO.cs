using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ng2Template.objects
{
    public class EmployeeVO
    {
        public string FullName { get; set; }

        public string TKID { get; set; }

        public string JobTitle { get; set; }

        public string Department { get; set; }

        public string Email { get; set; }

        public bool Saved { get; set; }
    }
}