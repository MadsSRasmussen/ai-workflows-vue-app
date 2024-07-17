import { getCurrentUser } from "vuefire"
import type { User } from "firebase/auth";
import type { RouteLocationNormalizedGeneric, NavigationGuardNext, RouteRecordNameGeneric } from "vue-router";

type UserAuth = 'none' | 'default' | 'admin' | 'super'

async function isAuthenticated(user: User, allowedAuths: UserAuth[]): Promise<boolean> {

    const idTokenResult = await user.getIdTokenResult();
    if (!idTokenResult.claims.auth) return false;
    if (!allowedAuths.includes(idTokenResult.claims.auth as UserAuth)) return false;

    return true

}

export async function guardDefaultAuth(to: RouteLocationNormalizedGeneric, from: RouteLocationNormalizedGeneric, next: NavigationGuardNext) {

    const user = await getCurrentUser();
    if (!user) {
        next({ name: 'login' })
    } else {
        if (!(await isAuthenticated(user, ['super', 'admin', 'default']))) next({ name: 'forbidden' })
        else next();
    }

}

export async function guardAdminAuth(to: RouteLocationNormalizedGeneric, from: RouteLocationNormalizedGeneric, next: NavigationGuardNext) {

    const user = await getCurrentUser();
    if (!user) {
        next({ name: 'login' })
    } else {
        if (!(await isAuthenticated(user, ['super', 'admin']))) next({ name: 'forbidden' })
        else next();
    }

}

export async function guardSuperAuth(to: RouteLocationNormalizedGeneric, from: RouteLocationNormalizedGeneric, next: NavigationGuardNext) {

    const user = await getCurrentUser();
    if (!user) {
        next({ name: 'login' })
    } else {
        if (!(await isAuthenticated(user, ['super']))) next({ name: 'forbidden' })
        else next();
    }

}