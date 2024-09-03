import { Component } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  ngAfterViewInit() {
    this.initCollapsible();
    this.initFormSelect();
    this.initTimepicker();
    this.initDatepicker();
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
