using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ng2Template.objects;
using ng2Template.services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;

namespace ng2Template.wsServices
{
    /// <summary>
    /// Summary description for wSrvTools
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class wSrvTools : System.Web.Services.WebService
    {

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public dynamic SearchEmployee(string search, string next)
        {
            try
            {
                string result = new JavaScriptSerializer().Serialize(SrvTools.SearchEmployee(search));

                return new {
                    data = result
                };
                //Context.Response.Write(result);

            }
            catch (Exception ex)
            {
                //Context.Response.Write(ex.Message);
                return new
                {
                    error = ex.Message
                };
            }
        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = false, ResponseFormat = ResponseFormat.Json)]
        public dynamic AddEmployee(object form)
        {
            try
            {
                var json = JsonConvert.SerializeObject(form);
                //JObject oJson = JObject.Parse(json);
                EmployeeVO oEmployee = new JavaScriptSerializer().Deserialize<EmployeeVO>(json);

                string result = new JavaScriptSerializer().Serialize(SrvTools.AddEmployee(oEmployee));

                return new
                {
                    data = result
                };
                //Context.Response.Write(result);

            }
            catch (Exception ex)
            {
                //Context.Response.Write(ex.Message);
                return new
                {
                    error = ex.Message
                };
            }
        }
    }
}
