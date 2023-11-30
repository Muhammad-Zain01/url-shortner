export const RequestUrls = {
    // AUTH EVENTS
    login: '/auth/login',
    register: '/auth/register',
    verifyUsername: '/auth/verify',
    forgotPasswordEmailVerify: '/auth/forgot-password/email-verfiy',
    resetCode: '/auth/forgot-password/reset-code',
    // ADMIN EVENTS
    getUrls: '/admin/events/get-urls',
    verifyKeyword: '/admin/events/keyword',
    addUrl: '/admin/events/add-url',
    removeUrl: '/admin/events/remove-url',
    dashboardData: '/admin/events/dasboard-data',
    getDisplayName: '/admin/events/get-display-name',
    setDisplayName: '/admin/events/set-display-name',
    getUser: '/admin/events/get-user',
    updatePassword: '/admin/events/update-password',
    verifyUser: '/admin/events/verify-user',
    resendEmail: '/admin/events/resend-email',
    // GLOBAL EVENTS
    capture: '/capture',
}