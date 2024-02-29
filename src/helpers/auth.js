import { auth } from "@/auth";
import { config} from "./config";



export const getAuthHeader = async () => {
    const session = await auth();
    const token = session?.accessToken;
    let authHeader = { "Content-Type": "application/json" };
    if (token) {
        authHeader = { Authorization: `Bearer ${token}`, ...authHeader };
    }
    return authHeader;
};


export const isUserAuthorized = (role, url) => {
	const menu = config.userRightsOnRoutes.find((item) =>
		item.urlRegex.test(url)
	);
	if (!menu) return false;

	return menu.rights.includes(role);
};
export const parseJwt = (token) => {
    //token.split(".")[1] token 3 parçadan oluşur.2.parcada data bulunur
    //atbo ; base64 olarak şifrelenmiş stringleri çözer
    return JSON.parse(atob(token.split(".")[1]))
};

export const getIsTokenValid = (token) => {
    if(!token) return false;

    const jwtExpireTimeStamp = parseJwt(token).exp;
    //JWT token ların exp değeri saniye cinsinden olur
    const jwtExpireDateTime = new Date(jwtExpireTimeStamp * 1000);
    //new Data kendisine verilen mili saniye cinsinden değeri 1 ocak 1970 tarihine ekleyerek yeni bir tarih saat elde eder.
    if(jwtExpireTimeStamp <= new Date()){
        return false;
    }
    return true;

}
