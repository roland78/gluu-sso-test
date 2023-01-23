using ClosedXML.Excel;
using DecMgr.WebAPI.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;


namespace DecMgr.WebAPI.Helpers
{
    public class Api
    {


        private static readonly System.Globalization.CultureInfo cultureInfo = new System.Globalization.CultureInfo("de-DE");

        /// <summary>
        /// Creates a grid data set V30
        /// </summary>
        public static IList<PortfolioSelectionItem> GetPortfolioFilterData(string cid)
        {

            IList<PortfolioSelectionItem> res = new List<PortfolioSelectionItem>()
            {
                new PortfolioSelectionItem() { PortfolioName=$"Test 1, Param CID : {cid}" },
                new PortfolioSelectionItem() { PortfolioName=$"Test 2, Param CID : {cid}" }
            };

            return res;
        }

    }
}
