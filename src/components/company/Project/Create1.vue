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
                        Project is created
                    </div>
                    <div class="panel-heading">ADD NEW PROJECT</div>
                    <div class="panel-body">
                        <form @submit.prevent="postProject1" @keydown="clear($event.target.name)">

                            <span v-if="companies != null ">
                                <div class="form-group">
                                    <label>Select Company</label>
                                    <select name="company_id" class="form-control" v-model="projectData1.company_id">
                                        <option value="0">Choose a company --*</option>
                                        <option v-for="company in companies"  v-bind:value="company.id">{{company.name}}</option>
                                    </select>
                                    <p class="help is-danger">{{ getProjectError1('company_id') }}</p>
                                </div>
                            </span>
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="name" v-model="projectData1.name" class="form-control" placeholder="Enter project name">
                                <p class="help is-danger">{{ getProjectError1('name') }}</p>
                            </div>

                            <div class="form-group">
                                <label>Description</label>
                                <input type="text" name="description" v-model="projectData1.description" class="form-control" placeholder="Enter Description">
                                <p class="help is-danger">{{ getProjectError1('description') }}</p>
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

    import {postProject1} from '../../config';
    import {getCompanyUrl} from '../../config'
    export default {
        data () {
            return {
                projectData1: {
                    name: '',
                    description: '',
                    company_id: ''
                },
                saving: false,
                submitted: false,
                errors: {},
                companies: [],

            }
        },
        created() {
            this.getCompany();
        },
        methods: {
            postProject1() {
                this.$http.post(postProject1, this.projectData1).then(function (response) {
                    this.submitted = true
                    this.projectData1 = ''
                    this.$router.push({name:create1})
                })
                    .catch((err) => {
                        this.saving = false
                        this.errors = err.body.errors;
                    })
            },
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
            getProjectError1(field){

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