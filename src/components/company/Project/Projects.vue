<template lang="html">
<div class="container">
 <br>
 <br>

    <div class="row">
        <div class="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
            <div class="panel panel-primary">
                <div class="panel-heading">Projects <a class="pull-right btn btn-primary btn-sm" :href="`/projects/create`">Create new</a></div>
                    <div class="panel-body">
                        <my-project
                            v-for="project in projects"
                            :project="project">
                        </my-project>

                    </div>
                </div>
            </div>
        </div>


</div>
</template>





<script>
    import {getProjectUrl} from '../../config'
    import {getUser} from '../../config'
    import {logoutUrl} from '../../config'

    import Project from '../../company/Project/Project.vue'


   export default {
        data() {
            return {
                  projects: [],
                isAuth: null,
                loggedInUser: []
            }
        },

        components: {
            'my-project': Project
        },


       /*computed: {
           authenticatedUser () {
               // return this.$auth.getAuthenticatedUser()
               return this.loggedInUser.id === this.$auth.getAuthenticatedUser.id;
           }
       },*/

         created () {
            this.getProject();
           /*  this.isAuth = this.$auth.isAuthenticated();
             this.setAuthenticatedUser()*/
        },
        methods: {
            getProject () {
                   let me = this;
                 this.$http.get(getProjectUrl)
                .then(function (response) {
                    me.projects = response.data;
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


