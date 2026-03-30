import { Component, Input } from '@angular/core';
import { Card } from 'primeng/card';
import { FileUpload } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { InputSwitchModule } from 'primeng/inputswitch'
import { Tag } from 'primeng/tag';
import {ProgressBar} from 'primeng/progressbar'
import { FormsModule } from '@angular/forms';
import { Tooltip } from 'primeng/tooltip';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-import-page',
  imports: [Card, FileUpload, InputSwitchModule, Tag, ProgressBar, FormsModule, Tooltip],
  templateUrl: './admin-import-page.component.html',
  styleUrl: './admin-import-page.component.css',
  providers: [MessageService]
})
export class AdminImportPage {
  isWiping: boolean = false;
  isImporting: boolean = false;
  importLogs: string[] = [];
  uploadUrl = `${environment.back_url}/admin/upload`;

  constructor(private messageService: MessageService){}

  onStartUpload(event: any){
    event.formData.append('appendData', this.isWiping.toString());
    this.isImporting = true;
    this.addLog('Začínám proces nahrávání...');
  }

  onUploadSuccess(event: any) {
    this.isImporting = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data byly nahrány úspěšně' });
    this.addLog('Data úspěšně nahrány.');
  }

  onUploadError(event: any) {
    this.isImporting = false;
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Nepovedlo se nahrát data' });
    this.addLog('ERROR: Nahrávací proces selhal. Zkontrolujte serverové logy.');
  }

  private addLog(msg: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.importLogs.unshift(`[${timestamp}] ${msg}`);
  }
}
