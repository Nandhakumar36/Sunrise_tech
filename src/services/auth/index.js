import { NextPlan } from "@mui/icons-material";
import { get } from "lodash";
import { post } from "../http";
import { persist } from "../local-storage";
import axios from "axios";

export const signIn = async (user) => {
  let data;
  try {
    data = await post(`auth/login`, user);
    await persist("authToken", data.token);
  } catch (error) {
    throw error;
  }
  return data;
};

export const signUp = async (data) => {
  try {
    const {
      data: { token },
    } = await post(`/register`, data);
    await persist("authToken", token);
  } catch (error) {
    throw error;
  }
};


export const addFile = async (file) => {
  try {
    ;
    const { data } = await post(`auth/uploadImage`, file);
    return data
  } catch (error) {
    throw error;
  }
};

// export const imageFiles = async() => {
//   try {
//     const {data} = await get(`auth/getimages`)
//     return data
//   } catch (error) {
//     throw(error)
//   }
// }


// export const imageFiles = async () => {
//   try {
//     ;
//     const  {data} = await get(`auth/getimages`);
//     console.log(data)
//     return data
//   } catch (error) {
//     throw error;
//   }
// };



export const getJobs = async (id) => {
  try {
    const { data } = await get(`auth/getimages`);
    return data
  } catch (error) {
    throw error;
  }
};

export const fetchPosts = () => {
  return axios.get(`http://localhost:4000/auth/getimages`);
};