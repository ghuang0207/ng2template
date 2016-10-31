using ng2Template.intra.chsservice;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ng2Template
{
    public partial class Site1 : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            LoginUser = ((BasePage)this.Page).loginUser;

            if (Page.IsPostBack) return;

        }

        public PersonVO LoginUser;
    }
}