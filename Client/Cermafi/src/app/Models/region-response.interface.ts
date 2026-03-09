import { FieldModel } from "./object-models.interface";
import { SchoolModel } from "./object-models.interface";

export interface RegionResponse {
  id: number;                   
  regionName: string;        
  totalApps: number | null; // Total applications during the first round (count(id) from public.uchazec where kolo = 1)
  firstChoiceSuccessRate: number | null; //Average sucess rate on first choice (uchazec_volba where priorita = 1 and prijat = 1)
  secondChoiceSuccessRate: number | null; //Average sucess rate on second choice (uchazec_volba where priorita = 2 and prijat = 1)
  failRate: number | null; //Rate of (uchazec whose every uchazec_volba entry has prijat 2)
  topFields: FieldModel[] //Top 3 most popular fields
  topSchools: SchoolModel[] | null; //Top 3 most popular schools
  
  
}