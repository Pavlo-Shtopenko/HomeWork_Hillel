
const api = (() => {
    const API_URL ='https://reqres.in/api/';
    class API {
        constructor() {
            this._xhr = new XMLHttpRequest();
        }
        login() {
            this._xhr.open('POST', API_URL + 'login');
            this._xhr.setRequestHeader("Content-type", "application/json");
            this._xhr.onload = (event) => {
                console.log(event);
            }
            this._xhr.send(JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }));
        }
    }
    return new API();
}
)();