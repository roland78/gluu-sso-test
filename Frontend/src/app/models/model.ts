export class ListDataRow {
  ObligationAttdId: string;
  ObligationConfigId: string;
  PortfolioId: string;
  PortfolioName: string;
  SegSupAssignmentId: string;
  SegSupAssignmentValidFromDat: string;
  SegSupAssignmentValidUntilDat: string;
  SegSupAssignmentChangeReqAllowed: boolean;
  CustomerId: string;
  IsOblDecisionForOtherAccount: boolean;
  CustomerInstitutionOpt: number;
  ObligationDecId: string;
  SegmentId: string;
  SegmentName: string;
  SupplierId: string;
  SupplierName: string;
  IsSanaDecision: boolean;
  IsNoteTextSet: boolean;
  NoteText: string;
  SelectedConditionId: string;
  SelectedConditionText: string;
  ConditionType: string;  
  ReportedNumVal: string;
  PackSize: string;
  PZN: string;
  IngredientName: string;
  BasePPU: string;
  OblPPU: string;
  PriceBasePPU: string;
  DecStatusVal: number;
  DecStatusText: string;
  IsPharmacyOnlyArt: boolean;
  IsDisabled: boolean;
  ErrorText: string;
  TotalCount: number;
  SlotDeadlineDat: string;
  DecValidFrom: string;
  DecValidTo: string;
  CreateOblDec: boolean;
  EditOblDec: boolean;
  IsSelected:boolean;
  IsExpanded:boolean;
  DecCreatedFromServProviderName: string;
  DecCreatedFromServProviderFirstId: string;
  DecisionsCreatedByServProvider: ListDataRow[]  
  IsFavSet: boolean;
  IsExcSet: boolean;
  ValidityPeriodTxt: string;
  IsValidityChanged: boolean;
  ArtOrSementPimURL: string;
  SegmentNumber: string;
  IsInterim: boolean;
  ReportedUoM: string;
  CancellationText: string;
  CancellationUntilDate: string;
  SelectedRefundConditionId: string;
  RefundLevelText: string;  
  IsBestPriceCustomer: boolean;
}

export class DecFormData {
  public ObligationAttdId: string;
  public ObligationConfigId: string;
  public IsVgVconfig: boolean;
  public ObligationConfigSlotLeadTime: number;
  public PortfolioId: string;
  public PortfolioName: string;
  public SegSupAssignmentId: string;
  public CustomerId: string;
  public ObligationDecId: string;
  public IsOblDecisionForOtherAccount: boolean;
  public IsRevenueAndAmoutRequired: boolean;
  public IsBusinessVolumeNecessary: boolean;
  public IsRefundLevelAllowed: boolean;
  public ErrorText: string;
  public SegmentConditionModelType: number;
  public SegmentTurnover: number;
  public IsSegmentDisabled: boolean;
  public IsCancellationAllowed: boolean;
  public SegmentId: string;
  public SegmentName: string;
  public SupplierId: string;
  public SupplierName: string;
  public IsSanaDecision: boolean;
  public IsNoteTextSet: boolean;
  public NoteText: string;
  public SelectedConditionId: string;
  public SelectedConditionText: string;
  public ConditionType: string;
  public IsDisabled: boolean;
  public ReportedNumVal: string;
  public PackSize: string;
  public PZN: string;
  public BasePPU: string;
  public OblPPU: string;
  public PriceBasePPU: string;
  public ReportedNumValOtherType: string;
  public ReportedAmount: number;
  public ReportedRevenue: number;
  public SegSupWarnInfo: string;
  public SegSupWarnInfoRefund: string;
  public OutdatedSelectionWarnInfo: string;
  public OutdatedSelectionWarnInfoRefund: string;
  public ConditionModelType: number; // 0-Base Price, 1-Quantity, 2-Turnover, 3-Concentration(Turnover), 4-Concentarion(Qty)
  public Conditions: Condition[];
  public RefundConditions: Condition[];  
  public IsGroupLevelUsed: boolean;
  public GroupLevel:string; 
  public GroupLevelCalc:string; 
  public GroupLevelSpnVisible:boolean; 
  public SelectedRefundConditionId: string;
  public RefundLevelText:string; 
  public Customers: Customer[];
  public SelectedCustomers: Customer[];
  public IsCustSelectionAvailable: boolean;
  public SegSupOutdatedWarnInfo: string;
  public VgVWarnInfo: string;
  public NotVgVWarnInfo: string;
  public VgVCloseExistingDec: boolean;
  public NotVgVCloseExistingDec: boolean;
  public DecStatusVal: number;
  public DecStatusText: string;
  public SlotSelectionList: SelectionListItem[];
  public SelectedSlotId: string;
  public IsSelected:boolean;
  public CancellationText: string;
  public CancellationUntilDate: string;
  public CreateOblDec: boolean;
  public EditOblDec: boolean;
  public IsPharmacyOnlyArt: boolean;
  public ReasonForRejection: string;
  public ReportedUoM: string;
  public IsInterim: boolean;
  public DecCreatedFromServProviderFirstId: string;
  public DecCreatedOn: string;
  public SubmittedOn: string;
  public AcceptedOn: string;
  public DecCreatedBy: string;
  public DecReleasedBy: string;
  public DecAcceptedBy: string;
}

export class SlotListItem {
  public SlotId: string;
  public TargetDay: string;
  public ConditionStart: string;
  public PortfolioName: string;
}

export class PortfolioSelectionItem {
  public PortfolioId: string;
  public PortfolioName: string;
  public IsSelected: boolean;
  public ObligationAttdId: string;
  public StatId: number;
  public StatName: string;
  public EoneDetailsPortfolioBaseUrl: string;
  public SegSupRelations: PortfolioSegSupRel[];
}

export class PortfolioSegSupRel {
    public PortfolioId: string;
    public SegmentId: string;
    public SupplierId: string;
}

export class Segment {
  public SegmentId: string;
  public SegmentName: string;
  public SegmentTurnover: number;
  public IsSegmentDisabled: boolean;
  public IsSelected: boolean;
  public HasDecisionsOtherThenBasePrice: boolean;
  public SegmentConditionModelType: number;
}

export class Supplier {
  public SupplierId: string;
  public SupplierName: string;
}

export class Customer{
    public SegmentId: string;
    public SegmentName: string;
    public SupplierId: string;
    public SupplierName: string;
    public CustomerId: string;
    public CustomerName: string;
    public IsSelected: boolean;
    public IsDisabled: boolean;
    public CustInfoCndTxt: string;
    public CustInfoForecastQty: string;
    public CustInfoForecastTrn: string;
    public CustInfoRefund: string;
    public CustInfoRefundVal: string;    
    public CustInfoCndTexOneLine: string;
    public PriceListNo: string;
}

export class Condition {
  public SegmentId: string;
  public SegmentName: string;
  public SupplierId: string;
  public SupplierName: string;
  public ConditionId: string;
  public Concentration: string;
  public PriceListVal: string;
  public PriceListNo: string;
  public PriceListNoSortNumVal: number;
  public Quantity: string;
  public Turnover: string;
  public SelectionTxt: string;
  public ReportSelectionTxt: string;
  public IsSelected: boolean;
  public SegSupAssignmentId: string;
  public ConditionModelType: number;  // 0-Base Price, 1-Quantity, 2-Turnover, 3-Concentration
  public GroupLevel: number; 
  public RefundCurrencySymbol: string;
  public MinVal: string;
  public OutdatedMsg: string;
  public UoM: string;
  public IsBestPrice: number; 
  public BestPriceCondName: string; 
}

export class SelectionListItem {
  public Id: string;
  public Name: string;
  public OblConfigId: string;
}

export class FilterCtlItems {
  public Portfolios: SelectionListItem[];
  public Suppliers: SelectionListItem[];
  public Articles: SelectionListItem[];
  public DecStats: SelectionListItem[];
  public ArticleCatalog: ArticleCatItem[];
  public Segments: SelectionListItem[];
  public ErrorText: string;
}

export class QuickLinksData {
  public CntAll: string;
  public CntNew: string;
  public CntInqueue: string;
  public CntSubmitted: string;
  public CntAccepted: string;
  public CntRejected: string;
  public CntCancellationReq: string;
  public CntCancelled: string;
  public CntExpired: string;
  public CntOpen: string;
  public CntSlotEndsSoon: string;
  public CntFavorites: string;
  public CntExcluded: string;
}

export class ArticleCatItem {
    public ArtOrGrouptId: string;  // PortfolioId
    public ArtOrGrouptName: string;
    public PZN: string;
    public ATC: string;
    public Ingredient: string;
    public PackSize: string;
    public ParentId: string;
    public LevelNo: number;
    public IsArtNode: boolean;
    public IsSelected: boolean;
    public ChildItems: ArticleCatItem[];
}

export class FilterQuerySet {
  public Portfolios: SelectionListItem[];
  public AllPortfolios: boolean;
  public Suppliers: SelectionListItem[];
  public AllSuppliers:boolean;
  public Segments: SelectionListItem[];
  public AllSegments:boolean;  
  public Articles: SelectionListItem[];
  public AllArticles: boolean;
  public DecStats: SelectionListItem[];
  public AllDecStats: boolean;
  public showOnlyValidDecisions: boolean;
  public showLastDecisions: boolean;
  public validFrom: string;
  public validTo: string;
  public QuickLinkSelectedName: string;
  public KeyWordFilter: string;
}

export class OblDecCUDReq{
  public OType: number;  // 1-Save, 2-Save and Process(Abgeben), 3-Delete, 4-Cancel
  public OblAttendanceId: string;
  public SegmentId: string;
  public SupplierId: string;
  public DecDataRow: DecFormData;  
}

export class OblDecCUDRes{
  public OblDecId: string;
  public IsError: boolean;
  public ErrorText: string;
}

/*reporting*/
export class SupplierCondition {
  public SegmentId: string;
  public SegmentName: string;
  public SupplierId: string;
  public SupplierName: string;
  public IsSanaDecision: boolean;
  public IsNoteTextSet: boolean;
  public NoteText: string;
  public SelectedConditionId: string;
  public IsDisabled: boolean;
  public ReportedNumVal: string;
  public ReportedNumValOtherType: string;
  public ReportedAmount: number;
  public ReportedRevenue: number;
  public SegSupWarnInfo: string;
  public SegSupWarnInfoRefund: string;
  public OutdatedSelectionWarnInfo: string;
  public OutdatedSelectionWarnInfoRefund: string;
  public ConditionModelType: number; // 0-Base Price, 1-Quantity, 2-Turnover, 3-Concentration(Turnover), 4-Concentarion(Qty)
  public Conditions: Condition[];
  public RefundConditions: Condition[];  
  public IsGroupLevelUsed: boolean;
  public GroupLevel:string; 
  public GroupLevelCalc:string; 
  public GroupLevelSpnVisible:boolean; 
  public SelectedRefundConditionId: string;
  public RefundLevelText:string; 
  public Customers: Customer[];
  public SelectedCustomers: Customer[];
  public IsCustSelectionAvailable: boolean;
  public SegSupOutdatedWarnInfo: string;
  public VgVWarnInfo: string;
  public VgVCloseExistingDec: boolean;
}

/*reporting*/
export class SegmentSupplierData {
  public ObligationAttdId: string;
  public ObligationConfigId: string;
  public IsRevenueAndAmoutRequired: boolean;
  public IsBusinessVolumeNecessary: boolean;
  public IsRefundLevelAllowed: boolean;
  public IsOblDecisionForOtherAccount: boolean;
  public Segments: Segment[];
  public Suppliers: Supplier[];
  public Conditions: Condition[];  
  public SupplierConditions: SupplierCondition[];
  public ErrorText: string;
  public CustomerId: string;
}

export class FavExclItem
{
    public FavExclId: string;
    public FavExclName: string;
    public ContactId: string;
    public AssignmentId: string;
    public ItemType: number; // -- 1 - IsFavorite, 2 - IsExcludedItem
}

export class EditFormStateInfo {
  public IsChange: boolean;  
  public AppType: number;  
  public IsFormVisible: boolean;  
}


