import apiInstance from '../AxiosConect'
import { LOGIN_ENDPOINTS } from '../constants/GlobalConstants';

export const LoginAPI = {
    login: (user, password) => {
        return apiInstance.get(LOGIN_ENDPOINTS.LOGIN, { params: { email: user, password: password } }).then(({ data }) => data);
    },
}
export const RegisterAPI = {
    signUp: (username, email, pass) => {
        return apiInstance.get(LOGIN_ENDPOINTS.SIGN_UP, { params: { username: username, email: email, password: pass } }).then(({ data }) => data);

    },
    emailCheck: (email) => {
        return apiInstance.get(LOGIN_ENDPOINTS.EMAIL_CHECK, { params: { email: email} }).then(({ data }) => data);

    },
    userUpdate: (id, username, email, name, lastname) => {
        return apiInstance.get(LOGIN_ENDPOINTS.USER_UPDATE, { params: { id:id, username:username, email:email, name:name, lastName:lastname } }).then(({ data }) => data);

    },
}
