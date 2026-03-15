import { Component, Input } from '@angular/core';
import { Card } from 'primeng/card';
import { FileUpload } from 'primeng/fileupload';
import { NgIf, NgFor } from '@angular/common';
import { MessageService } from 'primeng/api';
import {InputSwitchModule} from 'primeng/inputswitch'
import { Tag } from 'primeng/tag';
import {ProgressBar} from 'primeng/progressbar'
import { FormsModule } from '@angular/forms';
import { Tooltip } from 'primeng/tooltip';


@Component({
  selector: 'app-admin-import-page',
  imports: [Card, FileUpload, NgIf, NgFor, InputSwitchModule, Tag, ProgressBar, FormsModule, Tooltip],
  templateUrl: './admin-import-page.component.html',
  styleUrl: './admin-import-page.component.css',
  providers: [MessageService]
})
export class AdminImportPage {
  isWiping: boolean = false;
  isImporting: boolean = false;
  importLogs: string[] = []

  constructor(private messageService: MessageService){}

  onStartUpload(event: any){
    event.formData.append('wipeData', this.isWiping.toString());
    this.isImporting = true;
    this.addLog('Starting import process...');
  }

  onUploadSuccess(event: any) {
    this.isImporting = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data imported successfully' });
    this.addLog('Import completed successfully.');
  }

  onUploadError(event: any) {
    this.isImporting = false;
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Import failed' });
    this.addLog('ERROR: Import process failed. Check server logs.');
  }

  private addLog(msg: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.importLogs.unshift(`[${timestamp}] ${msg}`);
  }
}
