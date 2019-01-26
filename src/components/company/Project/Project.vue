<template>
    <ul class="list-group">
        <li class="list-group-item">
            <a :href="`/projects/${project.id}`" class="btn-default">  {{ project.name }} || created {{ project.created_at| timeago }}</a>
        </li>

    </ul>
</template>




<script>
    export default {
        props: ['project'],
        data() {
            return {

            }
        },


        methods:{

        }





    }

</script>
