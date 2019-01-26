<template>
    <div class="row">
       <p>You are logged out</p>
    </div>

</template>

<script>
    import {logoutUrl} from '../config'
    export default {
        data () {
            return {
               

            }
        },
        methods: {
            logout() {
               this.$http.post(logoutUrl)
                    .then(response => {
                        this.$auth.destroyToken(response.body.access_token, response.body.expires_in + Date.now())
                        this.$router.push("/")
                        // console.log(response)
                    })
                /*   .then(function (response) {
                   console.log(response)
               })*/
            }
        }

    }
</script>

<style>

</style>