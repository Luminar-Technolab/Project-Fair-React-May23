import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";

//register API
export const registerAPI = async (user)=>{
  return await commonAPI("POST",`${BASEURL}/user/register`,user,"")
}

//loginAPI
export const loginAPI = async (user)=>{
  return await commonAPI("POST",`${BASEURL}/user/login`,user,"") 
}

//addprojectapi
export const addProjectAPI = async (project,header)=>{
  return await commonAPI("POST",`${BASEURL}/projects/add`,project,header)
}
