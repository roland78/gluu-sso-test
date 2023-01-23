import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FilterCtlItems, FilterQuerySet, SelectionListItem, ListDataRow, OblDecCUDReq, OblDecCUDRes, SegmentSupplierData, PortfolioSelectionItem, QuickLinksData, DecFormData, FavExclItem, SlotListItem } from './models/model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmService {

  constructor(private _http: HttpClient) {     

  }

  /**
  * Gets portfolio filter V30
  */
   async getPortfoliosData(cid: string): Promise<PortfolioSelectionItem[]> {
          
    try
    {
      console.log("------CmService------>GetPortfolioData");
      const response = await this._http.get<PortfolioSelectionItem[]>(environment.webapibaseurl + '/DecMgrApi/GetPortfolioData?cid=' + cid).toPromise();
      return response;
    }
    catch(e)
    {
      console.log("Service.getPortfoliosData error : ", e);      
    }

  }

}
