
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;


namespace DecMgr.WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //1.user goes to index.html in browser
            //2.angular app->call api to check if authenticated; api replies yes or no, if no it returns the redirect url to gluu
            //3.angular app redirects user to gluu
            //4.gluu user enters user / password
            //5.gluu redirect / form post user to angular app on a specific route(ex: yourapp.com / authorize_callback)
            //6.angular app calls backend api and passes relevant data(query/ json / form url encoded)
            //7.backend api should process that data(I guess the openid library can handle this)->user authorized or not
            //8.backend api reply to angular with authorized/ not authorized and also the proper angular route to move to(ex: yourapp.com / home_page or other route)

            //Browser(user)->Angular App->Backend->GLUU->Angular App

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicyAll",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });

            services.AddControllers()
                .AddJsonOptions(j =>
            {
                j.JsonSerializerOptions.PropertyNamingPolicy = null;
            });
            
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
            })
            .AddCookie(options =>
            {
                //options.LoginPath = "/app/index.html";
            })
            .AddOpenIdConnect(options =>
            {
                options.CallbackPath = $"/DecMgrApi/OidcAfterSignIn"; 
                options.ClientId = "532eb48a-ab3f-4b0f-8554-2e5d3d2ab625"; 
                options.ClientSecret = "2#ti^N`s#qV>$&2FRfz'"; 
                options.Authority = "https://auth.dev-sana-eone.de"; 
                options.MetadataAddress = "https://auth.dev-sana-eone.de/.well-known/openid-configuration";
                options.ResponseType = OpenIdConnectResponseType.Code;
                options.GetClaimsFromUserInfoEndpoint = true;

                options.Events.OnRedirectToIdentityProvider += OnRedirectToIdentityProviderFunc;
                options.Events.OnAuthorizationCodeReceived += OnAuthorizationCodeReceivedFunc;
            }
            );

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {


            app.UseRouting();

            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "app")),
                RequestPath = "/app",


            });

        }

        private async Task OnRedirectToIdentityProviderFunc(RedirectContext context)
        {
            // Don't remove this line
            await Task.CompletedTask.ConfigureAwait(false);
        }

        private async Task OnAuthorizationCodeReceivedFunc(AuthorizationCodeReceivedContext context)
        {
            await Task.CompletedTask.ConfigureAwait(false);
        }
    }
}
