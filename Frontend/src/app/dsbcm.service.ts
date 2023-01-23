import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EditFormStateInfo, FilterQuerySet, ListDataRow, QuickLinksData } from './models/model';

@Injectable({
  providedIn: 'root'
})
export class DsbcmService {

  public AppType: number;
  public EditFormStateInfo: EditFormStateInfo;

  private _appType: number;
  //private _isEditFormVisible: boolean;
  private _editFormStateInfo: EditFormStateInfo;

  private _isLoading: boolean;
  private _infoText: string;
  private _currentQuickLink: string;
  private _selectedRow: ListDataRow;
  private _quickLinksData: QuickLinksData;
  private _filterQuerySet: FilterQuerySet;

  private _selectedRowStateSource: BehaviorSubject<ListDataRow>;
  private _editFormVisibilityStateSource: BehaviorSubject<EditFormStateInfo>;
  private _progressVisibilityStateSource: BehaviorSubject<boolean>;  
  private _progressVisibilityWithTextStateSource: BehaviorSubject<string>;
  private _selectedQuickLinkStateSource: BehaviorSubject<string>;
  private _appTypeSelectionStateSource: BehaviorSubject<number>;
  private _quickLinksDataStateSource: BehaviorSubject<QuickLinksData>;
  private _filterQuerySetStateSource: BehaviorSubject<FilterQuerySet>;

  public selectedRowChanges: Observable<ListDataRow>;
  public editFormVisibilityChanges: Observable<EditFormStateInfo>;
  public progressVisibilityChanges: Observable<boolean>;
  public progressVisibilityWithTextChanges: Observable<string>;
  public selectedQuickLinkChanges: Observable<string>;
  public appTypeSelectionChanges: Observable<number>;
  public quickLinksDataChanges: Observable<QuickLinksData>;
  public filterQuerySetChanges: Observable<FilterQuerySet>;

  constructor() {

    this._selectedRowStateSource = new BehaviorSubject<ListDataRow>(this._selectedRow);
    this._editFormVisibilityStateSource = new BehaviorSubject<EditFormStateInfo>(this._editFormStateInfo);
    this._progressVisibilityStateSource = new BehaviorSubject<boolean>(this._isLoading);
    this._progressVisibilityWithTextStateSource = new BehaviorSubject<string>(this._infoText);
    this._selectedQuickLinkStateSource = new BehaviorSubject<string>(this._currentQuickLink);
    this._appTypeSelectionStateSource = new BehaviorSubject<number>(this._appType);
    this._quickLinksDataStateSource = new BehaviorSubject<QuickLinksData>(this._quickLinksData);
    this._filterQuerySetStateSource = new BehaviorSubject<FilterQuerySet>(this._filterQuerySet);

    this.selectedRowChanges = this._selectedRowStateSource.asObservable();
    this.editFormVisibilityChanges = this._editFormVisibilityStateSource.asObservable();
    this.progressVisibilityChanges = this._progressVisibilityStateSource.asObservable();
    this.progressVisibilityWithTextChanges = this._progressVisibilityWithTextStateSource.asObservable();
    this.selectedQuickLinkChanges = this._selectedQuickLinkStateSource.asObservable();
    this.appTypeSelectionChanges = this._appTypeSelectionStateSource.asObservable();
    this.quickLinksDataChanges = this._quickLinksDataStateSource.asObservable();
    this.filterQuerySetChanges = this._filterQuerySetStateSource.asObservable();
        
  }

  public changeFilterQuerySet(fsetdata: FilterQuerySet): void {
    this._filterQuerySet = fsetdata;
    this._filterQuerySetStateSource.next(this._filterQuerySet);
  }

  public changeQuickLinksData(qldata: QuickLinksData): void {
    this._quickLinksData = qldata;
    this._quickLinksDataStateSource.next(this._quickLinksData);
  }

  public changeSelectedRow(row: ListDataRow): void {
    this._selectedRow = row;
    this._selectedRowStateSource.next(this._selectedRow);
  }

  // 1 - Pharma, 2 - Medical
  public switchToAppType(appType: number): void {    
    this._appType = appType;
    this.AppType = appType;
    this._appTypeSelectionStateSource.next(this._appType);    
  }

  public changeEditFormVisibility(stateInfo: EditFormStateInfo): void {    
    this._editFormStateInfo = stateInfo;
    this.EditFormStateInfo = stateInfo;
    this._editFormVisibilityStateSource.next(this._editFormStateInfo);
  }

  // Closes an edit form with default settings.
  public closeEditForm(){
    let stateInfo: EditFormStateInfo = {IsChange: false, AppType: this._appType, IsFormVisible: false }
    this.changeEditFormVisibility(stateInfo);
  }

  public showProgressBar(): void {    
    this._isLoading = true;
    this._progressVisibilityStateSource.next(this._isLoading);
  }  

  public sendProgressInfoText(text: string): void {    
    this._progressVisibilityWithTextStateSource.next(text);
  }  

  public selectQuickLink(qlinkname: string): void {    
    this._selectedQuickLinkStateSource.next(qlinkname);
  }  

  public hideProgressBar(): void {    
    this._isLoading = false;
    this._progressVisibilityStateSource.next(this._isLoading);
  }  

}
