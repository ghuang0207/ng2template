using ng2Template.objects;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ng2Template.services
{
    public static class SrvTools
    {
        public static List<EmployeeVO> SearchEmployee(string search)
        {
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["connEmployee"].ConnectionString);
            SqlCommand cmd = new SqlCommand("search_name_tkid", conn);
            cmd.Parameters.AddWithValue("@search", search);
            cmd.CommandType = CommandType.StoredProcedure;

            List<EmployeeVO> people = null;

            try
            {
                conn.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                if (reader.HasRows)
                {
                    people = new List<EmployeeVO>();
                    while (reader.Read())
                    {
                        EmployeeVO p = new EmployeeVO();

                        p.FullName = reader["FullName"].ToString();
                        p.Email = reader["CompanyEmailAddress"].ToString();
                        p.TKID = reader["employeeid"].ToString();
                        p.JobTitle = reader["Position"].ToString();


                        people.Add(p);
                    }
                }

                return people;

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                conn.Close();
            }
        }

        public static EmployeeVO AddEmployee(EmployeeVO emp)
        {
            EmployeeVO e = emp;
            e.Saved = true;

            return e;
        }
    }
}