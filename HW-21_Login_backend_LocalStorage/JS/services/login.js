
export async function login(loginData) {

    const result = await fetch ("https://reqres.in/api/login", {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(loginData)
    })    
    return result;
    // .then(res => res.json())
    // .then(response => {
    //   localStorage.setItem('token', response.token)
    //   return response
    // })
    // .catch(error => console.warn(error))
  }
//   console.log(sendLoginData);


