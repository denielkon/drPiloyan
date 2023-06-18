const $host = axios.create({
   baseURL: 'http://localhost:7000/'
})

const $authHost = axios.create({
   baseURL: 'http://localhost:7000/',
})

const AuthInterceptor = config => {
   config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
   return config;
}
$authHost.interceptors.request.use(AuthInterceptor)
export async function showAddCaseMenuReq() {
   try {
      const response = await $authHost.get('api/getAddCase')
      return response;
      main.innerHTML = response.data;
      addCaseFunctional()
      allAdminFunctional()
   } catch (error) {
      console.log(error.message);
   }
   
}