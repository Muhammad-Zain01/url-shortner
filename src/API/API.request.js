import { Post, authPost } from "./API"
import { RequestUrls } from "./API.request.urls"
export const Login = async (username, password) => {
    return await Post(RequestUrls.login, { username, password })
}
export const VerifyUsername = async (username) => {
    return await Post(`${RequestUrls.verifyUsername}/${username}`)
}
export const RegisterUser = async (data) => {
    return await Post(RequestUrls.register, data)
}
export const GetUrls = async () => {
    return await authPost(RequestUrls.getUrls)
}
export const verifyKeyword = async (keyword) => {
    return await authPost(`${RequestUrls.verifyKeyword}/${keyword}`)
}

export const addUrl = async (data) => {
    return await authPost(RequestUrls.addUrl, data)
}

export const removeUrl = async (keyword) => {
    return await authPost(`${RequestUrls.removeUrl}/${keyword}`)
}

export const CaptureUser = async (data) => {
    return await Post(RequestUrls.capture, data)
}
export const getDashboardData = async () => {
    return await authPost(RequestUrls.dashboardData)
}