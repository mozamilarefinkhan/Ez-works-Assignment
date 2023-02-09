import { fetchUser } from "../utils/firebaseLocalStorageData"

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
};