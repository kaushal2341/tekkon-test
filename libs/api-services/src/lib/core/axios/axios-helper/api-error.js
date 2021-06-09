export default {
    errorHandler: error => {
        const {response} = error;
        const status = response ? response.status : '';

        switch (status) {
            case 400:
            case 401:
            case 403:
            case 404:
            case 409:
            case 417:
            case 413:
            case 410:
            case 500:
            case 502:
            case 408:
                console.log("Developer Api Error:", error);
                if(error.response.data)
                  throw error.response.data
                 else{
                     throw new Error('Sorry Internal Server Error')
                 } 
                // if(error.response)
                //  throw Error({...error.response,errorMessage:error.response.error})
               
            default:
                console.log("Developer Api Error:", error);
                let newError=''
                if(typeof error ==='string')
                  newError=error
                else
                  newError = error?.error ||error.message
                let errorObj = {
                    error: newError||'Network Error',
                    stack: error.stack
                };
                throw errorObj;
        }
    }

}
