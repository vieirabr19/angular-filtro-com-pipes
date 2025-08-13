import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'statusImage'
})
export class StatusImagePipe implements PipeTransform {
    transform(status: number): string {
        const statusImage: {[key: number]: string} = {
            1: 'assets/icons/active-icon.png',
            2: 'assets/icons/inactive-icon.png'
        };

        return statusImage[status];
    }
}