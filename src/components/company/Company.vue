<template>
    <ul class="list-group">
        <li class="list-group-item">
            <a :href="`/companies/${company.id}`" class="btn-default">  {{ company.name }} || created {{ company.created_at| timeago }}</a>
        </li>

    </ul>
</template>




<script>
    import diffForHumans from '../../mixins/timeMixins/timeMixin';
    export default {
        props: ['company'],
        data() {
            return {

            }
        },


        methods:{

        }





    }

</script>
