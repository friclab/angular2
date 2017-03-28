import { Observable, Observer } from 'rxjs';
import { FormControl } from '@angular/forms';

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateEmail(c: FormControl) {



    /* return new Observable<any>((observer: Observer<any>) => {
         if (EMAIL_REGEXP.test(this.c)) {
             observer.next(null);
         } else {
             observer.next({ valid: false });
         }
     }); */

    return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
            valid: false
        }
    };




}