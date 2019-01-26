export default function (Vue) {
    let authenticatedUser = {}
    Vue.auth = {
        //set token
        //get token
        //destroy token
        //isAuthenticated

        setToken(token, expiration) {
            localStorage.setItem('token', token)
            localStorage.setItem('expiration', expiration)
        },

        getToken() {
            let token = localStorage.getItem('token');
            let expiration = localStorage.getItem('expiration');

            if (!token || !expiration)
                return null;

            if (Date.now() > parseInt(expiration)) {
                this.destroyToken();
                return null;
            } else {
                return token;
            }
        },


        destroyToken() {
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
        },

        isAuthenticated() {
            if (this.getToken())
                return true
            else
                return false
        },
        setAuthenticatedUser(data)
        {
            authenticatedUser = data
        },
        getAuthenticatedUser(data)
        {
            return authenticatedUser
        }
    }

    // lets define the property $auth used in the login.vue
    Object.defineProperties(Vue.prototype, {
        $auth: {
            get()  {
                return Vue.auth;
    }
        }
    })
}