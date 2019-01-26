<template>
    <div class="row">
        <br>
        <br>
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <p class="help is-danger" style="color:red;">{{ getLoginError('message') }}</p>
                    <div class="form-group">
                        <input
                                v-model="email"
                                class="form-control"
                                type="email"
                                placeholder="Email"
                        >
                    </div>
                    <p class="help is-danger" style="color:red;">{{ getLoginError('email') }}</p>
                    <div class="form-group">
                        <input
                                v-model="password"
                                class="form-control"
                                type="password"
                                placeholder="Password"
                        >
                    </div>
                    <p class="help is-danger" style="color:red;">{{ getLoginError('password') }}</p>

                    <button @click="login" class="btn btn-success pull-right">Login</button>
                    <div class="hr"></div>
                    <div class="foot-lnk">
                        <label>Not yet a registered Member?</label>
                        <a href="/" class="btn btn-primary">Register</a>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

    import {loginUrl} from '../config'
    import {clientId, clientSecret } from '../config'

    export default {
        data () {
            return {
                email: '',
                password: '',
                errors: {},
                validations: {
                    email: {
                        is_valid: true,
                        text: ''
                    },
                    password: {
                        is_valid: true,
                        text: ''
                    },

                }
            }


        },
        methods: {
            login() {
                const data =  {
                    client_id: clientId,
                    client_secret: clientSecret,
                    grant_type: "password",
                    username: this.email,
                    password: this.password,
                    scope:''
                };


                this.$http.post(loginUrl, data)
                    .then(response => {
                        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                        window.location = '/companies'
                        // console.log(response)
                    })
                    .catch( (err) => {
                        this.errors = err.body.errors || err.body ;
                    })

            },
            getLoginError(field){

                if (this.errors.hasOwnProperty(field) ){
                    if ( typeof this.errors[field] === "object" ) return this.errors[field][0];

                    if ( typeof this.errors[field] === "string" ) return this.errors[field];
                }

            },
        }

    }
</script>

<style>

</style>