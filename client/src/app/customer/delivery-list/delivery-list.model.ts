export class DELIVERYLIST {
  public VBELN: any;
  public ERZET: string;
  public ERDAT: string;
  public VKORG: string;
  public LFART: string;
  public LFDAT_V: string;
  public INCO2: string;
  public ARKTX: string;
  public LFUHR: string;

  constructor(
    VBELN: string,
    ERZET: string,
    ERDAT: string,
    VKORG: string,
    LFART: string,
    LFDAT_V: string,
    INCO2: string,
    ARKTX: string,
    LFUHR: string
) {
    this.VBELN = VBELN;
    this.ERZET = ERZET;
    this.ERDAT = ERDAT;
    this.VKORG = VKORG;
    this.LFART = LFART;
    this.LFDAT_V = LFDAT_V;
    this.INCO2 = INCO2;
    this.ARKTX = ARKTX;
    this.LFUHR = LFUHR;
  }
}
