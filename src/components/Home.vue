<template>
        <div class="bg1" style="background: url('static/images/banner.jpg');background-size:cover;">
<br>
<br>
            <div class="row">
                <div class="col-md-7"></div>
                <div class="col-md-4 panel">
                    <!-- sign in form begins -->
                    <form @submit.prevent="signup()"  class="form-horizontal" enctype="multipart/form-data" @keydown="clear($event.target.name)">
                        <fieldset>
                             <div class="alert alert-success" v-if="submitted">
                                   <button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                                   You request has been sent..A mail has been sent to you
                               </div>

                            <!-- Text input-->
                            <div class="form-group">
                                <label class="col-md-12 control-label"></label>
                                <div class="col-md-12">
                                    <input name="full_name" id="full_name" v-model="signupData.full_name" placeholder="Enter your full name" class="form-control input-md" type="text" >
                                    <p class="help is-danger">{{ getSignupError('full_name') }}</p>
                                </div>
                            </div>

                          <!--  <div class="form-group">
                                <label class="col-md-12 control-label"></label>
                                <div class="col-md-12">
                                    <input name="username" id="username" v-model="signupData.username" placeholder="Enter your username" class="form-control input-md" type="text" >
                                    <span style="color: red;" class="text-danger"></span>
                                    <p class="help is-danger">{{ getSignupError('username') }}</p>
                                </div>
                            </div>-->

                            <!-- Text input-->
                            <div class="form-group">
                                <label class="col-md-12 control-label"></label>
                                <div class="col-md-12">
                                    <input name="email" id="email" v-model="signupData.email" placeholder="Enter your email" class="form-control input-md" type="email" >
                                    <p class="help is-danger">{{ getSignupError('email') }}</p>
                                </div>
                            </div>

                            <!-- Text input-->
                            <div class="form-group">
                                <label class="col-md-12 control-label"></label>
                                <div class="col-md-12">
                                    <input v-model="signupData.city" name="city" id="city" placeholder="Enter your city" type="text" class="form-control input-md">
                                    <p class="help is-danger">{{ getSignupError('city') }}</p>
                                </div>
                            </div>




                            <!-- Text input-->
                            <div class="form-group">
                                <label class="col-md-12 control-label"></label>
                                <div class="col-md-12">
                                    <input name="password" id="password" v-model="signupData.password" placeholder="******" class="form-control input-md" type="password">
                                    <p class="help is-danger">{{ getSignupError('password') }}</p>
                                </div>
                            </div>

                            <!-- Text input-->
                            <div class="form-group">
                                <label class="col-md-12 control-label"></label>
                                <div class="col-md-12">
                                    <input v-model="signupData.password_confirmation" name="password_confirmation" id="password_confirmation" placeholder="******" type="password" class="form-control input-md" data-type="password">
                                    <p class="help is-danger">{{ getSignupError('password_confirmation') }}</p>
                                </div>
                            </div>


                            <br>
                            <br>


                            <!--    <div class="form-group">
                                    <label class="col-md-12control-label"></label>
                                    <div class="col-md-12">
                                        <input name="passport" class="form-control input-md" type="file">
                                    </div>
                                </div>-->

                            <div class="group">
                                <button type="submit" :class="[ (signingUp)?  'is-loading' : '' ]" class="btn btn-primary" :disabled="any()">Sign Up</button>
                            </div>
                            <div class="hr"></div>
                            <div class="foot-lnk">
                                <label>Already Member?</label>
                                <a href="/login" class="btn btn-primary">Login</a>
                            </div>

                        </fieldset>
                    </form>
                </div><!--col-md-6 end-->

            </div>
        </div>


</template>

<script type="text/javascript">
    import {regUrl} from './config';
    //import Flash from '../helpers/flash'
    export default {
        data () {
            return {
                signupData: {
                    email: '',
                    password: '',
                    full_name: '',
                   // username: '',
                    password_confirmation: '',
                    city: ''
                },
                signingUp: false,
                submitted: false,
                errors: {}
                }
            },
            methods:{

            signup(){

                this.signingUp = true ;
                this.$http.post(regUrl, this.signupData)
                    .then(function (response) {
                        // console.log(response);
                        //$('button').text('signing up ...');
                        //this.submitted = true;
                        //Flash.setSuccess('You have successfully signed up.')
                        this.$router.push('/login')
                      //  alert('success');

                    })
                    .catch((err) => {
                        this.signingUp = false ;
                      //  console.log(err)
                       // this.errors = err.response.data.errors;
                        this.errors = err.body.errors;


                    });
            },






            getSignupError(field){

                if (this.errors.hasOwnProperty(field) ) {



                    if (typeof this.errors[field] === "object") {

                        return this.errors[field][0];
                    }

                    if ( typeof this.errors[field] === "string" ) {

                        return this.errors[field]

                    }



                }

            },




            /*clear(){
                        this.error = false;
                        this.success = false;
                        this.message = '';
                        clearTimeout(this.errorTimeout);
                        clearTimeout(this.successTimeout);
                    },
            */




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


<style scoped>
    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .position-ref {
        position: relative;
    }

    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }

    .content {
        text-align: center;
    }

    .title {
        font-size: 84px;
    }

    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }

    .m-b-md {
        margin-bottom: 30px;
    }
</style>
