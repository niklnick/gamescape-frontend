import { User } from "../../users/models/user.model";

export interface Auth {
    readonly user: User;
    readonly accessToken: string;
    readonly refreshToken: string;
}
