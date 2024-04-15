import $api from '../http';
 
export default class UserProfileService {
    static async getProfile(userId: number) {
        try {
            const response = await $api.get('/profile/getProfile', {params: {id: userId}})
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

}