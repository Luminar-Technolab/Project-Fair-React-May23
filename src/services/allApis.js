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

//user/all-projects
export const userProjectAPI = async (header)=>{
  return await commonAPI("GET",`${BASEURL}/user/all-projects`,"",header)
}

//homeprojects
export const homeProjectsAPI = async ()=>{
  return await commonAPI("GET",`${BASEURL}/home/projects`,"","")
}

//allprojects
export const allProjectsAPI = async (searchKey,header)=>{
  return await commonAPI("GET",`${BASEURL}/projects/all?search=${searchKey}`,"",header)
}

//editproject
export const editProjectAPI = async (projectId,reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${BASEURL}/project/edit/${projectId}`,reqBody,reqHeader)
}

//deleteproject
export const deleteProjectAPI = async (projectId,reqHeader)=>{
  return await commonAPI("DELETE",`${BASEURL}/project/remove/${projectId}`,{},reqHeader)
}