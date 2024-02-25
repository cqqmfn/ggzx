//统一管理咱们项目用户相关的接口
//需要用到axios
import request from "@/utils/request";
import type { loginForm, loginResponseData, userResponseData } from "./type";
//统一管理接口
enum API {
  LOGIN_URL = "/user/login", //登录
  USERINFO_URL = "user/info", //获取用户信息的地址
}
//暴露请求函数
//登录接口方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
//获取用户信息接口方法
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL);
