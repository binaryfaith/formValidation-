export class User {
    constructor(
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public password: string = "",
        public confirmPassword: string = "",
        public address: string = "",
        public city: string = "",
        public state: string = "",
        public yes: string = "",
        public no: string = "",
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}
