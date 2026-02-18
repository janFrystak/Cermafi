import { FieldModel } from "./object-models.interface";
export interface RegionRespone {
  id: number;                   
  region_name: string;        
  region_name_short: string;  
  
  stats: {
    totalApps: number | null;
    successRate1: number | null; //Average sucess rate on first choice (uchazec_volba where poradi = 1 and prijat = 1)
    successRate2: number | null; //Average sucess rate on second choice (uchazec_volba where poradi = 2 and prijat = 1)
    failRate: number | null; //Rate where 
    popFields: FieldModel[] //Top 3 most popular
    schools: {
      totalCount: number | null;
      
    }
  };
}