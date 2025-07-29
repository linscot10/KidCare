
<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
<footer class="footer">
<div class="socials">
    
    <div class="social">
        <div class="logo">
        <p class='log'><span>👶</span></p>
        <h1>KidCare</h1>

        </div>
        <p>Connecting families with trusted daycare providers.</p>
        <p>Making childcare search simple, safe, and stress-free.</p>

        <div class="links">
        
       <ul class="link">
        <li><a href="https://github.com/linscot10" target="_blank" rel="noopener"> <font-awesome-icon :icon="['fab', 'github']" /></a></li>
        <li><a href="https://twitter.com/" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
        <li><a href="https://linkedin.com/in/lawrence-scott-osuru" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
        <li><a href="https://www.instagram.com/nite_script/" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
        <li><a href="https://wa.me/254758396075?text=Hello%20Nite_script%2C%20I%20have%20a%20question!" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'whatsapp']" /></a></li>
       </ul>

        </div>


    </div>
        <div class="quickLinks">
        <h3>Quick Links</h3>
            <ul>
            <li>
                <routerLink to="/">Find Daycare</routerLink>
            </li>
            <li>
                <routerLink to="/">List Your Center</routerLink>
            </li>
            <li>
                <routerLink to="/">How It Works</routerLink>
            </li>
            <li>
                <routerLink to="/">Reviews </routerLink>
            </li>
            </ul>
        </div>
        <div class="support">
        <h3>Support</h3>
            <ul>
            <li>
                <routerLink to="/">Help Center</routerLink>
            </li>
            <li>
                <routerLink to="/">Contact Us</routerLink>
            </li>
            <li>
                <routerLink to="/">Safety</routerLink>
            </li>
            <li>
                <routerLink to="/">Privacy Policy </routerLink>
            </li>
            <li>
                <routerLink to="/">Terms of Service</routerLink>
            </li>
            </ul>
        </div>
</div>
<hr/>
<p class="copy">&copy;2024 KidCare. All rights reserved. Made with ❤️ for families everywhere.</p>
</footer>

</template>

<style scoped>
.footer{
   
    width: 100%;
    background-color: #221f1f;
    color: #fff;
    line-height: 1.5;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
a,p{
    text-decoration: none;
    color: grey;
   
}
.logo,.links ul{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    /* margin: 1rem; */
    text-align: center;
}
.log{
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: rgb(220, 184, 220);
     margin-right: 0.8rem;
}
.log span{
    width: 4rem;
    height: 3;
   
    
}
li{
 list-style: none;
 
 
}
.link li{
    padding: 1rem;
}
.link a{
    font-size: 1.5rem;
    cursor: pointer;

}

.link li:first-child a:hover{
color: #fff;
}
.link li:nth-child(2) a:hover{
    color: #1DA1F2;
}
.link li:nth-child(3) a:hover{
    color:#0077B5;
}
.link li:nth-child(4) a:hover{
    color: #E4405F;
}
.link li:nth-child(5) a:hover{
    color: #25D366;
}

.socials{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.social{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* width: 100%; */
    margin: 2rem;
}
.quickLinks{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
    margin: 2rem;
}
.quickLinks a:hover{
color: #fff;
}
.support{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
    /* width: 100%; */
    margin: 2rem;
    margin-top: 0;
}

.support a:hover{
color: #fff;
}

hr{
   width: 80%;
}
.copy{
    padding: 1rem;
}
h3{
    padding-bottom: 1rem;
}
</style>
