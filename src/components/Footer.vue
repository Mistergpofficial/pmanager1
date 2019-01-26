<template>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <div class="widget">
                        <h5 class="widgetheading">Our Contact</h5>
                        <address>
                            <strong>Gitlinks InfoSoft</strong><br>
                            Admiralty Way Lekki Phase 1<br>
                            Lagos State.</address>
                        <p>
                            <i class="icon-phone"></i> (+234) 9028656123 <br>
                            <i class="icon-envelope-alt"></i> hello@gitlinks-infosoft.com
                        </p>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="widget">
                        <h5 class="widgetheading">Quick Links</h5>
                        <ul class="link-list">
                            <li><a href="#">Latest Events</a></li>
                            <li><a href="#">Terms and conditions</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="widget">
                        <h5 class="widgetheading">Latest posts</h5>
                        <ul class="link-list">
                            <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                            <li><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
                            <li><a href="#">Natus error sit voluptatem accusantium doloremque</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="widget">
                        <h5 class="widgetheading">Recent News</h5>
                        <ul class="link-list">
                            <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                            <li><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
                            <li><a href="#">Natus error sit voluptatem accusantium doloremque</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="sub-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="copyright">
                            <p>
                                <span>&copy; Gitlinks InfoSoft 2017 All right reserved. Design By </span><a href="#" target="_blank">Geepee</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <ul class="social-network">
                            <li><a href="#" data-placement="top" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#" data-placement="top" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#" data-placement="top" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#" data-placement="top" title="Pinterest"><i class="fa fa-pinterest"></i></a></li>
                            <li><a href="#" data-placement="top" title="Google plus"><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer{background: #191919;}
    footer ul.link-list li a{
        color: #8C8C8C;
    }
    footer ul.link-list li a:hover {
        color: #46bd55;
    }
    /* --- Heading style --- */

    h4.heading {
        font-weight:700;
    }

    .heading { margin-bottom: 30px; }

    .heading {
        position: relative;

    }


    .widgetheading {
        width:100%;
        padding:0;
        font-weight: bold;
    }

    #bottom .widgetheading {
        position: relative;
        border-bottom: #e6e6e6 1px solid;
        padding-bottom: 9px;
    }

    aside .widgetheading {
        position: relative;
        border-bottom: #e9e9e9 1px solid;
        padding-bottom: 9px;
    }

    footer .widgetheading {
        position: relative;
    }

    footer .widget .social-network {
        position:relative;
    }

    .team-member h4{
        text-align: center;
        margin-bottom: 5px;
    }
    .team-member .deg{
        text-align:center;
        display:block;
    }
    #bottom .widget .widgetheading span, aside .widget .widgetheading span, footer .widget .widgetheading span {
        position: absolute;
        width: 60px;
        height: 1px;
        bottom: -1px;
        right:0;

    }
    .panel-title>a {
        color: inherit;
        text-decoration: none;
        font-weight: 600;
    }
    .box-area{padding: 15px;background: #f7f7f7;/* margin-top: -21px; */border: none;color: #616161;font-size: 13px;box-shadow: 0px -2px 1px rgba(0, 0, 0, 0.39);border-bottom: 1px solid #e5e5e5;}
    .box-area h3{font-size: 16px;font-weight: 700;color: #000;text-transform: uppercase;}
    /* --- Map --- */
    .map{
        position:relative;
        margin-top:-50px;
        margin-bottom:40px;
    }

    .map iframe{
        width:100%;
        height:450px;
        border:none;
    }

    .map-grid iframe{
        width:100%;
        height:350px;
        border:none;
        margin:0 0 -5px 0;
        padding:0;
    }


    ul.team-detail{
        margin:-10px 0 0 0;
        padding:0;
        list-style:none;
    }

    ul.team-detail li{
        border-bottom:1px dotted #e9e9e9;
        margin:0 0 15px 0;
        padding:0 0 15px 0;
        list-style:none;
    }

    ul.team-detail li label {
        font-size:13px;
    }

    ul.team-detail li h4, ul.team-detail li label{
        margin-bottom:0;
    }

    ul.team-detail li ul.social-network {
        border:none;
        margin:0;
        padding:0;
    }

    ul.team-detail li ul.social-network li {
        border:none;
        margin:0;
    }
    ul.team-detail li ul.social-network li i {
        margin:0;
    }


    .pricing-title{
        background:#fff;
        text-align:center;
        padding:10px 0 10px 0;
    }

    .pricing-title h3{
        font-weight:600;
        margin-bottom:0;
    }

    .pricing-offer{
        background: #fcfcfc;
        text-align: center;
        padding:40px 0 40px 0;
        font-size:18px;
        border-top:1px solid #e6e6e6;
        border-bottom:1px solid #e6e6e6;
    }

    .pricing-box.activeItem .pricing-offer{
        color:#fff;
    }

    .pricing-offer strong{
        font-size:78px;
        line-height:89px;
    }

    .pricing-offer sup{
        font-size:28px;
    }

    .pricing-container{
        background: #fff;
        text-align:center;
        font-size:14px;
    }

    .pricing-container strong{
        color:#353535;
    }

    .pricing-container ul{
        list-style:none;
        padding:0;
        margin:0;
    }

    .pricing-container ul li{
        border-bottom: 1px solid #CFCFCF;
        list-style: none;
        padding: 15px 0 15px 0;
        margin: 0 0 0 0;
        color: #222;
    }

    .pricing-action{
        margin:0;
        background: #fcfcfc;
        text-align:center;
        padding:20px 0 30px 0;
    }

    .pricing-wrapp{
        margin:0 auto;
        width:100%;
        background:#fd0000;
    }
    .pricing-box-item {border: 1px solid #e6e6e6;background:#fcfcfc;position:relative;margin:0 0 20px 0;padding:0;-webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.03);-moz-box-shadow: 0 2px 0 rgba(0,0,0,0.03);box-shadow: 0 2px 0 rgba(0,0,0,0.03);-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;overflow: hidden;}

    .pricing-box-item .pricing-heading {
        background: #ffffff;
        text-align: center;
        padding: 50px 0;
        display:block;
    }
    .pricing-box-item.activeItem .pricing-heading {
        background: #ffffff;
        text-align: center;
        border-bottom:none;
        display:block;
        color: #46bd55;
    }
    .pricing-box-item.activeItem .pricing-heading h3 {

        color: #46bd55;
    }

    .pricing-box-item .pricing-heading h3 strong {
        font-size:28px;
        font-weight:700;
        letter-spacing:-1px;
        /* color: #46bd55; */
    }
    .pricing-box-item .pricing-heading h3 {
        font-size:32px;
        font-weight:300;
        letter-spacing:-1px;
    }

    .pricing-box-item .pricing-terms {
        text-align: center;
        background: #fff;
        display: block;
        overflow: hidden;
        padding: 11px 0 5px;
        /* border-top: 2px solid #BBBBBB; */
        border-bottom: 2px dotted #CDCDCD;
    }

    .pricing-box-item .pricing-terms  h6 {
        color: #46bd55;
        font-size: 22px;
        background: #ededed;
        padding: 25px;
        margin: 0 0 -5px;
        border-top: 3px solid #46bd55;
    }

    .pricing-box-item .icon .price-circled {
        margin: 10px 10px 10px 0;
        display: inline-block !important;
        text-align: center !important;
        color: #fff;
        width: 68px;
        height: 68px;
        padding:12px;
        font-size: 16px;
        font-weight:700;
        line-height: 68px;
        text-shadow:none;
        cursor: pointer;
        background-color: #888;
        border-radius: 64px;
        -moz-border-radius: 64px;
        -webkit-border-radius: 64px;
    }

    .pricing-box-item  .pricing-action{
        margin:0;
        text-align:center;
        padding:30px 0 30px 0;
    }
    .pricing-action .btn{
        background: #46bd55;
        color: #fff;
    }
    /* ===== Widgets ===== */

    /* --- flickr --- */
    .widget .flickr_badge {
        width:100%;
    }
    .widget .flickr_badge img { margin: 0 9px 20px 0; }

    footer .widget .flickr_badge {
        width: 100%;
    }
    footer .widget .flickr_badge img {
        margin: 0 9px 20px 0;
    }

    .flickr_badge img {
        width: 50px;
        height: 50px;
        float: left;
        margin: 0 9px 20px 0;
    }

    /* --- Recent post widget --- */

    .recent-post{
        margin:20px 0 0 0;
        padding:0;
        line-height:18px;
    }

    .recent-post h5 a:hover {
        text-decoration:none;
    }

    .recent-post .text h5 a {
        color:#353535;
    }


    footer{
        padding:50px 0 0 0;
        color: #052321;
    }

    footer a {
        color: #bbb;
    }

    footer a:hover {
        color:#eee;
    }

    footer h1, footer h2, footer h3, footer h4, footer h5, footer h6{
        color: #46bd55;
    }

    footer address {
        line-height:1.6em;
        color: #797979;
    }

    footer h5 a:hover, footer a:hover {
        text-decoration:none;
    }

    ul.social-network {
        list-style:none;
        margin:0;
    }

    ul.social-network li {
        display:inline;
        margin: 0 5px;
        border: 1px solid #2D2D2D;
        padding: 5px 0 0;
        width: 32px;
        display: inline-block;
        text-align: center;
        height: 32px;
        vertical-align: baseline;
    }

    #sub-footer{
        text-shadow:none;
        color:#f5f5f5;
        padding:0;
        padding-top:30px;
        margin:20px 0 0 0;
        background: #191919;
    }

    #sub-footer p{
        margin:0;
        padding:0;
        color: #c5c5c5;
    }

    #sub-footer span{
        color: #828282;
    }

    .copyright {
        text-align:left;
        font-size:12px;
        color: #b3b3b3;
    }

    #sub-footer ul.social-network {
        float:right;
    }



    /* scroll to top */
    .scrollup{
        position:fixed;
        width:32px;
        height:32px;
        bottom:0px;
        right:20px;
        background: #46bd55;
    }

    a.scrollup {
        outline:0;
        text-align: center;
    }

    a.scrollup:hover,a.scrollup:active,a.scrollup:focus {
        opacity:1;
        text-decoration:none;
    }
    a.scrollup i {
        margin-top: 10px;
        color: #fff;
    }
    a.scrollup i:hover {
        text-decoration:none;
    }




    .absolute{
        position:absolute;
    }

    .relative{
        position:relative;
    }

    .aligncenter{
        text-align:center;
    }

    .aligncenter span{
        margin-left:0;
    }

    .floatright {
        float:right;
    }

    .floatleft {
        float:left;
    }

    .floatnone {
        float:none;
    }

    .aligncenter {
        text-align:center;
    }

    img.pull-left, .align-left{
        float:left;
        margin:0 15px 15px 0;
    }

    .widget img.pull-left {
        float:left;
        margin:0 15px 15px 0;
    }

    img.pull-right, .align-right {
        float:right;
        margin:0 0 15px 15px;
    }

    article img.pull-left, article .align-left{
        float:left;
        margin:5px 15px 15px 0;
    }

    article img.pull-right, article .align-right{
        float:right;
        margin:5px 0 15px 15px;
    }
    ============================= */

    .clear-marginbot{
        margin-bottom:0;
    }

    .marginbot10{
        margin-bottom:10px;
    }
    .marginbot20{
        margin-bottom:20px;
    }
    .marginbot30{
        margin-bottom:30px;
    }
    .marginbot40{
        margin-bottom:40px;
    }

    .clear-margintop{
        margin-top:0;
    }

    .margintop10{
        margin-top:10px;
    }

    .margintop20{
        margin-top:20px;
    }

    .margintop30{
        margin-top:30px;
    }

    .margintop40{
        margin-top:40px;
    }
    .flex-control-paging li a {
        width: 16px;
        height: 16px;
        border-radius: 0;
        background: #ffffff;
        text-indent: 50px;
        overflow: hidden;
    }
    .btn:hover, .btn:focus {
        color: #FFF;
        text-decoration: none;
        background: #35ac44;
        border-color: transparent;
    }
    /*  Media queries
    ============================= */

    @media (min-width: 768px) and (max-width: 979px) {

        a.detail{
            background:none;
            width:100%;
        }



        footer .widget form  input#appendedInputButton {
            display: block;
            width: 91%;
            -webkit-border-radius: 4px 4px 4px 4px;
            -moz-border-radius: 4px 4px 4px 4px;
            border-radius: 4px 4px 4px 4px;
        }

        footer .widget form  .input-append .btn {
            display: block;
            width: 100%;
            padding-right: 0;
            padding-left: 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            margin-top:10px;
        }

        ul.related-folio li{
            width:156px;
            margin:0 20px 0 0;
        }
    }

</style>