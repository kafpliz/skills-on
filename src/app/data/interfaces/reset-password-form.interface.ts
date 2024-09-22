import { FormControl } from "@angular/forms";

export interface IResetPasswordForm {
    email: FormControl<string>
}
export interface IEnterCodeForm{
    code: FormControl<string>
}

export interface INewPasswordForm{
    password: FormControl<string>
}


export interface ISendEmail {
    email: string
}
export interface ISendCode {
    code: number
}
export interface INewPassword {
    password: number
}