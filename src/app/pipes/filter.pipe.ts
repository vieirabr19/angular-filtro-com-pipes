import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(list: any[] | null, searchProp: string, searchValue: string): any[] {
        if(!list) return [];
        if(!list.length || !searchValue) return list;
        return list.filter(item => item[searchProp].toLowerCase().includes(searchValue.toLowerCase()));
    }
}