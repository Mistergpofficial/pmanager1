<template>
    <div class="container">
        <br>
        <br>
        <br>
        <div class="row col-md-9 col-lg-9 col-sm-9 pull-left">
            <div class="row col-md-12 col-lg-12 col-sm-12" style="background-color: white; margin: 10px;">
                <div class="panel panel-primary">
                    <div class="alert alert-dismissable alert-success" v-if="submitted">
                        <button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                        Update is successful
                    </div>
                    <div class="panel-heading">EDIT COMPANIES</div>
                    <div class="panel-body">
                        <form @submit.prevent="edit()">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" v-model="company.name" name="name" class="form-control" placeholder="Enter company name">
                            </div>

                            <div class="form-group">
                                <label>Description</label>
                                <input type="text" v-model="company.description" name="description" class="form-control" placeholder="Enter Description">
                            </div>
                            <div class="group">
                                <button type="submit"  :class="[ (editing)?  'is-loading' : '' ]"  class="button">Update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>


        <div class="col-sm-3 col-md-3 col-lg-3 pull-right" style="padding: 60px;">
            <div class="sidebar-module">
                <h4>Actions</h4>
                <ol class="list-unstyled">
                    <li><a :href="`/companies/${company.id}`">View Companies</a></li>
                    <li><a :href="`/companies`">All Companies</a></li>
                </ol>
            </div>

        </div>




    </div>
</template>

<script>
    import {getCompanyUrl} from '../config'
    export default {
        data () {
            return {
                company: {},
                errors: {},
                submitted: false,
                editing: false
            }
        },
        created() {
            this.getCompanyByID();
        },
        methods: {
            getCompanyByID() {
                let me = this;
                this.$http.get(getCompanyUrl + this.$route.params.company)
                    .then(function (response) {
                        //let answer = response;
                        me.company = response.body;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            edit() {
                this.editing = true ;
                this.$http.post(getCompanyUrl + this.$route.params.company + '/edit', this.company).then(response => {
                    this.company = response.body;
                    this.submitted = true;
                  //  this.company = '';
                   //  this.$router.self();
                    this.$router.push({name:companies})

                })
                    .catch((err) => {
                        this.editing = false ;
                        this.errors = err.body.errors;


                    });
            },



        }
    }
</script>