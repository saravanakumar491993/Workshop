import { ValidatorFn, AbstractControl, FormArray, FormGroup } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        let grp: FormGroup;
        (control as FormArray).controls.forEach((ctrl) => {
            let formGrp = ctrl as FormGroup;
            if (formGrp.get("isPrimary").value) {
                grp = formGrp;
            }
                
        });

        if(grp) {
            if (grp.get("phone").value) {
                return null;
            }
            else {
                return { primaryPhoneNumberEmpty: true };
            }
        }
        else {
            return { atleastOnePrimaryNumber: true };
        }
    };
}