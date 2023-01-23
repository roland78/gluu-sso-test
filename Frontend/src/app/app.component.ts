import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd, NavigationExtras} from '@angular/router';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { CmService } from './cm.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DsbcmService } from './dsbcm.service';
import { EditFormStateInfo, FilterQuerySet, ListDataRow, PortfolioSelectionItem, QuickLinksData } from './models/model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  isLoading: boolean = false;
  isLoadingWithText: boolean = false;
  progText: string = "";
  is_edit_form_shown: boolean = false; 
  appType: number;  // 1 - Pharma, 2 - Medical
  sessionid: string = '';                 
  cid: string = '';               
  coopid: string = '';               
  pid: string = '';               
  tid: string = '';   

  portfolios: PortfolioSelectionItem[] = [];
  
  constructor(
    private _service: CmService,
  ) {

    if (location.href != "") {          
      //this.cid = Utils.getParameterByName('cid', location.href);
    }   
  }

  /**
  * Initializes the component.
  */
  ngOnInit() {

    this._service.getPortfoliosData(location.href.split('?')[1].split('=')[1]).then( (portfoliodata) => {
      this.portfolios = portfoliodata;
    });

  }
}
