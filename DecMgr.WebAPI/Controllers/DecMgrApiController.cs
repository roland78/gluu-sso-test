using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;
using DecMgr.WebAPI.Helpers;
using DecMgr.WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;


namespace DecMgr.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]/{action}")]
    public class DecMgrApiController : ControllerBase
    {

        private readonly ILogger<DecMgrApiController> _logger;

        private const string AuthSchemes = OpenIdConnectDefaults.AuthenticationScheme; //CookieAuthenticationDefaults.AuthenticationScheme + "," + JwtBearerDefaults.AuthenticationScheme;

        [EnableCors("CorsPolicyAll")]
        ///[Authorize(AuthenticationSchemes = AuthSchemes)]
        [HttpPost]
        //public RedirectResult OidcLogin()
        public ActionResult OidcAfterSignIn()
        {
            return null; 
        }

        /// <summary>
        /// </summary>
        [EnableCors("CorsPolicyAll")]
        //[Authorize(AuthenticationSchemes = AuthSchemes)]
        [HttpGet]
        public async Task<IList<PortfolioSelectionItem>> GetPortfolioData(string cid)
        {
            var task = await Task.Run(() =>
            {
                try
                {                  
                    IList<PortfolioSelectionItem> res = Api.GetPortfolioFilterData(cid);
                    return res;
                }
                catch (Exception ex)
                {
                    
                    return new List<PortfolioSelectionItem>();
                }
            });

            return task;
        }

    }
}
