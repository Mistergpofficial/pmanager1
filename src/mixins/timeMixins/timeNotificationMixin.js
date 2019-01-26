

export default {

    data(){

        return{
            now : '',
            formattedTime : ''
        }


    },

    watch:{
        now(){
            this.formattedTime = this.getFormattedTime(this.notification.created_at);
        }
    },


    created(){
        this.formattedTime = this.getFormattedTime(this.notification.created_at);
        if (this.formattedTime === '0s'){
            this.formattedTime = "just now"
        }

        setInterval( () => {
            this.now = moment();
        }, 10000);

    },
    methods : {
        getFormattedTime(date){

            let now = moment(); //todays date
            let end = moment(date); // another date
            let duration = moment.duration(now.diff(end));
            let days = duration.asDays();
            let hours = duration.asHours() ;
            let minutes = duration.asMinutes() ;
            let seconds = duration.asSeconds() ;

            if(seconds === 0){
                return   "just now";
            }

            if(seconds > 0 && seconds < 60  ){
                return Math.round(seconds) + 's';
            }

            if(minutes > 0 && minutes < 60  ){
                return Math.round(minutes) + 'm';
            }

            if(hours > 0 && hours < 24  ){
                return Math.round(hours) + 'h';
            }

            if(days > 0  ){
                return end.format('MMM D');
            }


        }
    }

}
