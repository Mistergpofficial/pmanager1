<template lang="html">
<div class="container">
 <br>
 <br>

    <div class="row">
        <div class="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
            <div class="panel panel-primary">
                <div class="panel-heading">Companies <a class="pull-right btn btn-primary btn-sm" :href="`/companies/create`">Create new</a></div>
                    <div class="panel-body">
                        <my-company
                            v-for="company in companies"
                            :company="company">
                        </my-company>

                    </div>
                </div>
            </div>
        </div>


</div>
</template>





<script>
    import {getCompanyUrl} from '../config'
    import {getUser} from '../config'
    import {logoutUrl} from '../config'

    import Company from '../company/Company.vue'


   export default {
        data() {
            return {
                  companies: [],
                isAuth: null,
                loggedInUser: []
            }
        },

        components: {
            'my-company': Company
        },


       /*computed: {
           authenticatedUser () {
               // return this.$auth.getAuthenticatedUser()
               return this.loggedInUser.id === this.$auth.getAuthenticatedUser.id;
           }
       },*/

         created () {
            this.getCompany();
           /*  this.isAuth = this.$auth.isAuthenticated();
             this.setAuthenticatedUser()*/
        },
        methods: {
            getCompany () {
                   let me = this;
                 this.$http.get(getCompanyUrl)
                .then(function (response) {
                    me.companies = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
          /*  setAuthenticatedUser () {
                this.$http.get(getUser).then(response => {
                    this.$auth.setAuthenticatedUser(response.body)

                    //console.log(this.$auth.getAuthenticatedUser())
                    this.loggedInUser = response.data;
                });
            }*/
        }






}

</script>


