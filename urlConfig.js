const baseApi=location.hostname==='localhost'?"http://localhost:2000":" https://flipkart-back-end-app.herokuapp.com"

export const api=`${baseApi}/api`;
export const generatePublicUrl=(fileName)=>{
    return  `${baseApi}/${fileName}`
}
