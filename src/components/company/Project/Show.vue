<template xmlns:rows="http://www.w3.org/1999/xhtml">
    <div class="container">
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="row col-md-9 col-lg-9 col-sm-9 pull-left">
            <div class="well well-lg">
                <h1>{{ project.proj.name }}</h1>
                <p class="lead">{{ project.proj.description }}</p>
                <p><a class="btn btn-lg btn-success">Get Started Today</a></p>
            </div>

            <div class="row col-md-12 col-lg-12 col-sm-12" style="background-color: white; margin: 10px;">
           <!--     <a :href="`/projects/create/${project.id}`" class="pull-right btn btn-default btn-sm">Add Project</a>
           -->     <br/>
                <div class="alert alert-dismissable alert-success" v-if="submitted">
                    <button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                  Comment added successfully
                </div>

                <div class="row">
                    <div class="col-md-12 col-sm-12  col-xs-12 col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">
                                    <span class="glyphicon glyphicon-comment"></span>
                                    Recent Comments
                                </h3>
                            </div>
                            <div class="panel-body">
                                <ul class="media-list">
                                    <span v-for="use in project.user">
                                    <li class="media">
                                        <div class="media-body">
                                            <h4 class="media-heading">
                                                <small>
                                                    <br>
                                                {{ use.user.full_name }}&nbsp;commented {{ use.created_at |timeago }}
                                                </small>
                                            </h4>
                                           <p>{{ use.body }}</p>
                                            <p>{{ use.url }}</p>
                                        </div>
                                    </li>
                                    </span>
                                    <span v-if="project.user && project.user.length === 0">
                                     <center class="m-t-lg">NO COMMENT.</center>
                                    </span>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row container-fluid">
                    <form @submit.prevent="saveComment" @keydown="clear($event.target.name)">
                        <input type="hidden" name="commentable_type" v-model="commentData.commentable_type"/>
                        <input type="hidden" name="commentable_id" v-model="commentData.commentable_id"/>
                        <div class="form-group">
                            <label>Comment</label>
                            <textarea
                                    name="comment"
                                    v-model="commentData.comment"
                                    class="form-control autosize-target text-left"
                                    placeholder="Enter Comment"
                                    style="resize: vertical"
                                    rows="3" spellcheck="false"

                            ></textarea>
                            <p class="help is-danger">{{ getCommentError('comment') }}</p>
                        </div>

                        <div class="form-group">
                            <label>Proof of work done(Url/Photos)</label>
                            <textarea
                                    name="url"
                                    v-model="commentData.url"
                                    class="form-control autosize-target text-left"
                                    placeholder="Enter Url/Photos"
                                    style="resize: vertical"
                                    rows="2" spellcheck="false"

                            ></textarea>
                            <p class="help is-danger">{{ getCommentError('url') }}</p>
                        </div>

                        <div class="group">
                            <button type="submit" class="btn btn-primary" :disabled="any()">Add Comment</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>












        <div class="col-sm-3 col-md-3 col-lg-3 pull-right" style="padding: 60px;">
            <div class="sidebar-module">
                <h4>Actions</h4>
                <ol class="list-unstyled">
                    <li><a :href="`/projects/${project.proj.id}/edit`"><i class="fa fa-pencil-square-o"></i> Edit</a></li>
                    <li><a :href="`/projects/create/${project.proj.id}`"><i class="fa fa-plus-circle"></i> Create new Project</a></li>
                    <li><a :href="`/projects`"><i class="fa fa-user"></i>My Projects</a></li>
                    <span v-if="loggedInUser.id == project.proj.user_id">
                    <li><a @click="deleteproject()"><i class="fa fa-power-off"></i> Delete</a></li>
                        </span>
                </ol>
            <hr>
                <h4>Add members</h4>
                <div class="row">
                    <div class="alert alert-dismissable alert-success" v-if="submitted1">
                        <button class="close" type="button" data-dismiss="alert" aria-hidden="true">&#215;</button>
                        Member added successfully
                    </div>
                    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <form @submit.prevent="addTeam">
                            <input type="hidden" name="project_id" v-model="team.project_id"/>
                        <div class="input-group">
                            <input type="email" class="form-control" name="email" v-model="team.email" placeholder="Email..."/>
                            <p class="help is-danger">{{ getTeamError('email') }}</p>
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="submit">Add</button>
                            </span>
                        </div>
                        </form>
                    </div>
                </div>
            </div><!-- row -->
            <br>
            <h4>Team Members</h4>
            <ol class="list-unstyled">
                     <span v-for="use in project.users">
                <li><a href=""><i class="fa fa-pencil-square-o"></i>{{ use.email }}</a></li>
                     </span>
            </ol>


        </div>




    </div>
</template>

<script>
    import {getUser} from '../../config'
    import {getProjectUrl} from '../../config';
    import {postComment} from '../../config'
    import {addProjectTeam} from  '../../config'
    export default {
        computed: {
            authenticatedUser () {
                // return this.$auth.getAuthenticatedUser()
                return this.loggedInUser.id === this.$auth.getAuthenticatedUser.id;
            }
        },

        created (){
            this.getprojectByID();
            this.setAuthenticatedUser()
        },
        data() {
            return {
                commentData: {
                    url: '',
                    comment: '',
                    commentable_type: 'App\\Models\\Project',
                    commentable_id: this.$route.params.project
                },
                team: {
                  email: '',
                  project_id: this.$route.params.project
                },
                project: {},
                errors: {},
                loggedInUser: [],
                submitted: false,
                submitted1: false,


            }
        },
        methods: {
            getprojectByID() {
                this.$http.get(getProjectUrl + this.$route.params.project).then(response => {
                    this.project = response.body
                })
                    .catch((err) => {

                        this.errors = err.body

                    })
            },

            deleteproject() {
                let shouldDelete = confirm('Are you sure you want to delete this project');

                if (!shouldDelete) return;

                this.$http.delete(getprojectUrl + this.$route.params.project + '/delete', this.project).then(response => {
                    alert("Successfully Deleted !!");
                    this.$router.push('/projects');
                })
                    .catch(() => {
                        alert('errors', "could not delete !!");
                    })

            },
            setAuthenticatedUser () {
                this.$http.get(getUser).then(response => {
                    this.$auth.setAuthenticatedUser(response.body)

                    console.log(this.$auth.getAuthenticatedUser())
                    this.loggedInUser = response.data;
                });
            },
            saveComment(){
              this.$http.post(postComment, this.commentData).then(function (response) {
                    this.submitted = true;
                    this.commentData = ''
                //  this.$router.push({name: 'ProjectShow'});

              })
                  .catch( (err) => {
                      this.errors = err.body.errors
                  })
            },
            addTeam(){
              this.$http.post(addProjectTeam , this.team).then(function (response) {
                  this.submitted1 = true
                  this.team = ''
              })
                  .catch( (err) => {
                      this.errors = err.body.errors
                  })
            },
            getCommentError(field){

                if (this.errors.hasOwnProperty(field) ) {



                    if (typeof this.errors[field] === "object") {

                        return this.errors[field][0];
                    }

                    if ( typeof this.errors[field] === "string" ) {

                        return this.errors[field]

                    }
                }

            },
            getTeamError(field){
                if (this.errors.hasOwnProperty(field) ) {
                    if (typeof this.errors[field] === "object") {
                        return this.errors[field][0];
                    }
                    if ( typeof this.errors[field] === "string" ) {
                        return this.errors[field]
                    }
                }

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