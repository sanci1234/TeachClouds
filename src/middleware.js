//Bütün route'larda next*auth mekanizmalaırnın çalışmasını sağlar.
export {auth as middleware} from "@/auth";

//İsterse tüm uygulamaya açılan mekanizmalar bazı yerler içiçn devere dışı bırakabilir.
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }