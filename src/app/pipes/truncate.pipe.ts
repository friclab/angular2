import { Pipe, PipeTransform } from "@angular/core"
@Pipe({
    name: "truncate"
})
export class TruncatePipe implements PipeTransform {
    transform(value: string, maxChars: number = 20, endChars): string {
        let result = value;
        if (value && value.length > maxChars) {

            return value.substring(0, maxChars) + endChars;
        }
    }
}