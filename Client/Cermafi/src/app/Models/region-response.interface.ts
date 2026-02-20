import { FieldModel } from "./object-models.interface";
import { SchoolModel } from "./school-model.interface";
export interface RegionResponse {
  id: number;                   
  region_name: string;        
  region_name_short: string;  
  
  stats: {
    totalApps: number | null; // Total applications during the first round (count(id) from public.uchazec where kolo = 1)
    firstChoiceSuccRate: number | null; //Average sucess rate on first choice (uchazec_volba where poradi = 1 and prijat = 1)
    secondChoiceSuccRate: number | null; //Average sucess rate on second choice (uchazec_volba where poradi = 2 and prijat = 1)
    failRate: number | null; //Rate of (uchazec whose every uchazec_volba entry has prijat 2)
    popFields: FieldModel[] //Top 3 most popular fields
    schools: {
      popSchools: SchoolModel[]; //Top 3 most popular schools
    }
  };
}