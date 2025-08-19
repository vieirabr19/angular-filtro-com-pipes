import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-select',
  templateUrl: './comp-select.component.html',
  styleUrls: ['./comp-select.component.scss']
})
export class CompSelectComponent {
  nationalitiSelected: number | undefined = undefined;
  nationalities: {id: number, description: string}[] = [
    {id: 1, description: 'Brasileira'},
    {id: 2, description: 'Argentina'},
    {id: 3, description: 'Espanhola'},
  ];
}
