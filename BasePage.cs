using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using ng2Template.intra.chsservice;
using System.Configuration;

namespace ng2Template
{
    public class BasePage : System.Web.UI.Page
    {
        // common code for all workflows
        public CHSService service = new CHSService();
        public PersonVO loginUser = new PersonVO();

        protected override void OnPreInit(EventArgs e)
        {
            base.OnPreInit(e);
        }

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);
        }

        // all post back data received, can also get viewstate
        protected override void OnPreLoad(EventArgs e)
        {
            // 1. grab the logged-in user
            string login = String.Empty;
            if (ConfigurationManager.AppSettings["debug"].ToString() == "true")
            {
                login = Request.QueryString["login"];
                if (login == null) login = User.Identity.Name.Substring(User.Identity.Name.IndexOf(@"\") + 1);
            }
            else
            {
                login = User.Identity.Name.Substring(User.Identity.Name.IndexOf(@"\") + 1);
            }
            if (login.ToLower() == "ghuangadmin") login = "ghuang";
            if (login.ToLower() == "dwadmin") login = "ras";
            if (login.ToLower() == "gdadmin") login = "gdai";
            if (login.ToLower() == "agadmin") login = "aghosh";


            loginUser = service.GetPersonProfileByLogin(login);

            base.OnPreLoad(e);

            if (Page.IsPostBack) return;
        }
    }
}