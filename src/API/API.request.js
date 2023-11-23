import { Post, authPost } from "./API"
import { RequestUrls } from "./API.request.urls"
export const Login = async (username, password) => await Post(RequestUrls.login, { username, password })
export const VerifyUsername = async (username) => await Post(`${RequestUrls.verifyUsername}/${username}`)
export const RegisterUser = async (data) => await Post(RequestUrls.register, data)
export const GetUrls = async () => await authPost(RequestUrls.getUrls)
export const verifyKeyword = async (keyword) => await authPost(`${RequestUrls.verifyKeyword}/${keyword}`)
export const addUrl = async (data) => await authPost(RequestUrls.addUrl, data)
export const removeUrl = async (keyword) => await authPost(`${RequestUrls.removeUrl}/${keyword}`)
export const CaptureUser = async (data) => await Post(RequestUrls.capture, data)
export const getDashboardData = async () => await authPost(RequestUrls.dashboardData)
export const getDisplayName = async () => await authPost(RequestUrls.getDisplayName)
export const updateDisplayName = async (data) => await authPost(RequestUrls.setDisplayName, data)