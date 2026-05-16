import { Component, Input } from '@angular/core';
import { Card } from 'primeng/card';
import { FileUpload } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { InputSwitchModule } from 'primeng/inputswitch'
import { Tag } from 'primeng/tag';
import { ProgressBar } from 'primeng/progressbar'
import { FormsModule } from '@angular/forms';
import { Tooltip } from 'primeng/tooltip';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-import-page',
  imports: [Card, FileUpload, InputSwitchModule, Tag, ProgressBar, FormsModule, Tooltip],
  templateUrl: './admin-import-page.component.html',
  styleUrl: './admin-import-page.component.css',
  providers: [MessageService]
})
export class AdminImportPage {
  targetDate: string = '';
  savingDate = false;
  dateMessage = '';
  isWiping: boolean = false;
  isImporting: boolean = false;
  importLogs: string[] = [];
  backURL = environment.back_url;
  uploadUrl = `${this.backURL}/admin/upload`;

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadCurrentDate()
  }
  loadCurrentDate(): void {
    this.http.get<{ date: string | null }>(`${this.backURL}/config/countdown`)
      .subscribe({
        next: (res) => {
          this.targetDate = res.date ? new Date(res.date).toISOString().split('T')[0] : '';
        }
      });
  }
  saveDate(): void {
    this.savingDate = true;
    this.http.post(`${this.backURL}/config/countdown`,
      { date: this.targetDate || null },
      { withCredentials: true }
    ).subscribe({
      next: () => {
        this.savingDate = false;
        this.dateMessage = 'Uloženo';
        setTimeout(() => this.dateMessage = '', 3000);
      },
      error: () => {
        this.savingDate = false;
        this.dateMessage = 'Chyba při ukládání';
      }
    });
  }

  clearDate(): void {
    this.targetDate = '';
    this.saveDate();
  }

  onStartUpload(event: any) {
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
