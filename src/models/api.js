/*
 * @Author: qdlaoxu 
 * @Date: 2021-11-29 11:51:41 
 * @Last Modified by: qdlaoxu
 * @Last Modified time: 2021-11-29 11:52:35
 */

import { request } from "@/utils/request"

//部门列表  
export async function modelGetDepartmentList(params){
    let res = await request.get("/v1/pc/department/list", { params });
    return Promise.resolve(res);
}