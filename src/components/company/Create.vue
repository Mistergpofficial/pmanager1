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
                           Company Details Added Successfully
                       </div>
                    <div class="panel-heading">ADD NEW COMPANY</div>
                    <div class="panel-body">
                        <form @submit.prevent="saveCompany" @keydown="clear($event.target.name)">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="name" v-model="companyData.name" class="form-control" placeholder="Enter company name">
                                <p class="help is-danger">{{ getCompanyError('name') }}</p>
                            </div>

                            <div class="form-group">
                                <label>Description</label>
                                <input type="text" name="description" v-model="companyData.description" class="form-control" placeholder="Enter Description">
                                <p class="help is-danger">{{ getCompanyError('description') }}</p>
                            </div>
                            <div class="group">
                                 <button type="submit" :class="[ (saving)?  'is-loading' : '' ]" class="button" :disabled="any()">Create</button>
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
                    <li><a>View Companies</a></li>
                    <li><a :href="`/companies`">All Companies</a></li>
                </ol>
            </div>

        </div>




    </div>
</template>

<script>
   import {postCompany} from '../config';
    export default {
        data () {
            return {
                companyData: {
                    name: '',
                    description: ''
                },
                saving: false,
                submitted: false,
                errors: {}
                }
            },

        
            methods:{
            saveCompany(){

                this.saving = true ;
                this.$http.post(postCompany, this.companyData)
                    .then(function (response) {
                        // console.log(response);
                        //$('button').text('signing up ...');
                        this.submitted = true;
                        this.companyData = ''
                        //Flash.setSuccess('You have successfully signed up.')
                         this.$router.push({name:createcompany})
                      //  alert('success');

                    })
                    .catch((err) => {
                        this.saving = false ;
                      //  console.log(err)
                       this.errors = err.body.errors;


                    });
            },
                getCompanyError(field){

                    if (this.errors.hasOwnProperty(field) ) {



                        if (typeof this.errors[field] === "object") {

                            return this.errors[field][0];
                        }

                        if ( typeof this.errors[field] === "string" ) {

                            return this.errors[field]

                        }



                    }

                },

                clear(){
                        this.errors = false;
                        this.success = false;
                        this.message = '';
                        clearTimeout(this.errorTimeout);
                        clearTimeout(this.successTimeout);
                    },





            clear(field) {
                delete this.errors[field];
                // delete this.loginErrors[field];
            },

            any() {
                return Object.keys(this.errors).length > 0;
                // return Object.keys(this.loginErrors).length > 0;
            },

        }


    }
</script>