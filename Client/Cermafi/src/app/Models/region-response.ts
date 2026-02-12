export interface RegionRespone {
  id: number;                   
  region_nazev: string;        
  region_nazev_kratky: string;  
  
  stats?: {
    pocetUchazecu: number;
    pocetSkol: number;
    uprispech: number;
  };
}