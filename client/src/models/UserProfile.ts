import { Course } from "./Course";

export interface UserProfile {
    username: string;
    courses: Course[];
}