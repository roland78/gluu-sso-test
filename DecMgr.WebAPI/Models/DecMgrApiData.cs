using System;
using System.Collections.Generic;
using Microsoft.Xrm.Sdk;

namespace DecMgr.WebAPI.Models
{
    public class SlotListItem
    {
        public string SlotId { get; set; }
        public string TargetDay { get; set; }        
        public string ConditionStart { get; set; }
        public string PortfolioName { get; set; }
    }

    public class PortfolioSelectionItem
    {
        public string PortfolioId { get; set; }
        public string PortfolioName { get; set; }
        public bool IsSelected { get; set; }
        public string ObligationAttdId { get; set; }
        public int StatId { get; set; }
        public string StatName { get; set; }
        public string EoneDetailsPortfolioBaseUrl { get; set; }
     
    }

}
