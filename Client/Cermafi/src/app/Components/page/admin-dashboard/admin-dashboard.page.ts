import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { AdminModel } from '../../../Models/object-models.interface';
import { AdminService } from '../../../Services/admin-service.service';
 


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  providers: [MessageService, ConfirmationService],
  imports: [CommonModule, FormsModule, Toast, ConfirmDialog],
  templateUrl: './admin-dashboard.page.html',
  styleUrl: './admin-dashboard.page.css'
})
export class AdminDashboardPage implements OnInit{
  admins: AdminModel[] = []

  newUsername = '';
  newPassword = '';
  showPassword = false
  createLoading = false;

  changingPasswordFor: number | null = null;
  newPasswordValue = '';
  showChangePassword = false
  changeLoading = false;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(): void {
    this.adminService.getAccounts()
      .subscribe({
        next: (data) => this.admins = data,
        error: () => this.toast('error', 'Chyba', 'Nepodařilo se načíst adminy')
      });
  }
  createAdmin(): void {
    if (!this.newUsername || !this.newPassword) return;
    this.createLoading = true;
 
    this.adminService.createAccount(this.newUsername, this.newPassword)
    .subscribe({
      next: (admin) => {
        this.admins = [...this.admins, admin];
        this.newUsername = '';
        this.newPassword = '';
        this.createLoading = false;
        this.toast('success', 'Hotovo', `Admin "${admin.username}" byl vytvořen`);
      },
      error: (err) => {
        this.createLoading = false;
        const msg = err.error?.message === 'Username already exists'
          ? 'Uživatelské jméno již existuje'
          : 'Nepodařilo se vytvořit admina';
        this.toast('error', 'Chyba', msg);
      }
    });
  }

  confirmDelete(admin: AdminModel): void {
    this.confirmationService.confirm({
      message: `Opravdu chcete smazat admina "${admin.username}"?`,
      header: 'Smazat admina',
      icon: 'pi pi-trash',
      acceptLabel: 'Smazat',
      rejectLabel: 'Zrušit',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => this.deleteAdmin(admin)
    });
  }
  deleteAdmin(admin: AdminModel): void {
    this.adminService.deleteAccount(admin.id)
      .subscribe({
        next: () => {
          this.admins = this.admins.filter(a => a.id !== admin.id);
          this.toast('success', 'Hotovo', `Admin "${admin.username}" byl smazán`);
        },
        error: (err) => {
          const msg = err.error?.case == 3 //magic option that says that myId == deletedId
            ? 'Nemůžete smazat vlastní účet'
            : 'Nepodařilo se smazat admina';
          this.toast('error', 'Chyba', msg)
        }
      });
  }

  startChangePassword(id: number): void {
    this.changingPasswordFor = this.changingPasswordFor === id ? null : id;
    this.newPasswordValue = '';
  }

  changePassword(admin: AdminModel): void {
    if (!this.newPasswordValue) return;
    this.changeLoading = true;
 
    this.adminService.changePassword(admin.id, this.newPasswordValue).subscribe({
      next: () => {
        this.changeLoading = false;
        this.changingPasswordFor = null;
        this.newPasswordValue = '';
        this.toast('success', 'Hotovo', `Heslo pro "${admin.username}" bylo změněno`);
      },
      error: () => {
        this.changeLoading = false;
        this.toast('error', 'Chyba', 'Nepodařilo se změnit heslo');
      }
    });
  }

  private toast(severity: string, summary: string, detail: string): void {
    this.messageService.add({ severity, summary, detail, life: 3000 });
  }
}
