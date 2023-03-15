
function Request(url,data=false,method='GET',type='FORM_DATA'){
    return new Promise(async (resolve,reject)=>{

        const options ={
            method: method
        }
        if(data && method ==='POST'){
            options.body = type ==='JSON'? JSON.stringify(data) : parseDataToFormData(data);
        }
        const response =await fetch(url,options);
        const result = await response.json();
        if(response.ok){
            resolve(result);
        }else{
            reject(result);
        }
    })
}

function parseDataToFormData(data){
    //return formdata object
    const formData = new FormData();
    for(let [key,value] of Object.entries(data)){
        formData.append(key,value);
    }
    return formData;
}

export const get = url => Request(url);
export const postJson =(url,data) => Request(url,data,'POST','JSON');
export const postFormData = (url,data)=> Request(url,data,'POST','FORM_DATA')