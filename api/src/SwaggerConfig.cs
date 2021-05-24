//namespace Digb.Api
//{
//    using System;
//    using System.Collections.Generic;
//    using System.Linq;
//    using System.Threading.Tasks;
//    using System.Web.Http;

//    public class SwaggerConfig
//    {
//        public static void Register()
//        {
//            var thisAssembly = typeof(SwaggerConfig).Assembly;

//            GlobalConfiguration.Configuration
//                .EnableSwagger(c =>
//                {
//                    //swagger配置
//                    c.IncludeXmlComments(GetXmlCommentsPath());
//                    c.SingleApiVersion("v1", "MassiveRockWebApi");
//                })
//                .EnableSwaggerUi(c =>
//                {
//                    c.DocumentTitle("My webapi");
//                });
//        }
//        private static string GetXmlCommentsPath()
//        {
//            return String.Format(@"{0}\bin\MassiveRockWebApi.xml", System.AppDomain.CurrentDomain.BaseDirectory);
//        }
//    }
//}
