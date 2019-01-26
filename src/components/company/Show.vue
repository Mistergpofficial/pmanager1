<template>
    <div class="container">
    <br>
 <br>
 <br>
 <br>
 <br>
        <div class="row col-md-9 col-lg-9 col-sm-9 pull-left">
            <div class="jumbotron">
            <h1>{{ company.name }}</h1>
            <p class="lead">{{ company.description }}</p>
            <p><a class="btn btn-lg btn-success">Get Started Today</a></p>
            </div>

            <div class="row col-md-12 col-lg-12 col-sm-12" style="background-color: white; margin: 10px;">
            <a :href="`/projects/create/${company.id}`" class="pull-right btn btn-default btn-sm">Add Project</a>
                <span  v-for="project in company.projects">
                <div class="col-lg-4 col-lg-4 col-sm-4">
                    <h2>{{ project.name }}</h2>
                        <p class="text-danger">{{ project.description }}</p>
                        <p><a :href="`/projects/${project.id}`" class="btn btn-primary" role="button">View Project</a></p>
                </div>
                </span>
                <span v-if="company.projects && company.projects.length === 0">
                 <center class="m-t-lg">Project is empty.</center>
                </span>
            </div>
        </div>


        <div class="col-sm-3 col-md-3 col-lg-3 pull-right" style="padding: 60px;">
            <div class="sidebar-module">
                <h4>Actions</h4>
                <ol class="list-unstyled">
                    <li><a :href="`/companies/${company.id}/edit`">Edit</a></li>
                    <li><a @click="deleteCompany()">Delete</a></li>
                    <li><a :href="`/projects/create/${company.id}`">Add Project</a></li>
                    <li><a :href="`/companies`">Company Listing</a></li>
                    <li><a :href="`/companies/create`">Create new Company</a></li>
                </ol>
            </div>

            <div class="sidebar-module">
                <h4>Members</h4>
                <ol class="list-unstyled">
                    <li><a href="">NNAEMEKA</a></li>
                </ol>
            </div>
        </div>




    </div>
</template>

<script>
    import {getCompanyUrl} from '../config';
  export default {
      created (){
          this.getCompanyByID();
      },
      data() {
          return {
              company: {},
              error: {}

          }
      },
      methods: {
          getCompanyByID() {
              this.$http.get(getCompanyUrl + this.$route.params.company).then(response => {
                  this.company = response.body
              })
                  .catch((err) => {

                          this.error = err.body

                  })
          },

          deleteCompany() {
              let shouldDelete = confirm('Are you sure you want to delete this company');

              if (!shouldDelete) return;

              this.$http.delete(getCompanyUrl + this.$route.params.company + '/delete', this.company).then(response => {
                      alert("Successfully Deleted !!");
                      this.$router.push('/companies');
                  })
                  .catch(() => {
                      alert('error', "could not delete !!");
                  })

          },


      }
  }
</script>