import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isLoading = false

  ngAfterViewInit() {
    this.initCollapsible();
    this.initFormSelect();
    this.initTimepicker();
    this.initDatepicker();
    this.initFloatingActionButton();
  }

  private initFloatingActionButton() {
    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'));
  }

  genererProgramme(event: Event) {
    const filtresRapides = document.getElementById('filtresRapides') as HTMLFormElement;
    if (filtresRapides.checkValidity()) {
      this.isLoading = true
      document.getElementById('programme')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      event.preventDefault();
      filtresRapides.reportValidity();
    }
  }

  private initDatepicker() {
    M.Datepicker.init(document.querySelectorAll('.datepicker'), {
      autoClose: true,
      format: 'dd/mm/yy',
      i18n: {
        cancel: 'Annuler',
        months: [
          'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
          'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ],
        monthsShort: [
          'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin',
          'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'
        ],
        weekdaysShort: [
          'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'
        ],
        weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      }
    });
  }

  private initTimepicker() {
    M.Timepicker.init(document.querySelectorAll('.timepicker'), {
      autoClose: true,
      twelveHour: false,
      i18n: {
        cancel: 'Annuler',
        done: 'Ok'
      }
    });
  }

  private initFormSelect() {
    M.FormSelect.init(document.querySelectorAll('.formSelect'));
  }

  private initCollapsible() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {
      accordion: false
    });
  }
}
