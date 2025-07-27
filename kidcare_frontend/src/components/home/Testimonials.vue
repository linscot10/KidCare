<script setup>
import image from '../../../public/images/user-1.jpg'
import image2 from '../../../public/images/user-2.jpg'
import image3 from '../../../public/images/user-3.jpg'
</script>

<template>
    <div class="testimonials">
    <h1>What Parents Are Saying</h1>
    <p class="first">Join thousands of happy families using KidCare</p>
    <div class="testimonial">
    <div class="rate1">
     <p>⭐⭐⭐⭐⭐</p>
      <p>"KidCare made finding the perfect daycare so easy! The reviews were spot-on and the booking process was seamless. My daughter loves her new daycare!"</p>

        <div class="image">
        <img :src=image alt=" Martha" />
        <div class="text">
        <h4>Martha Wafula</h4>
        <p>Mom of Emma, 3 years old</p>
        </div>
    </div>
    </div>
    <div class="rate2">
    <p>⭐⭐⭐⭐⭐</p>
      <p>"As a working parent, I needed something reliable and trustworthy. KidCare connected me with an amazing daycare that sends daily updates. Highly recommend!"</p>
    
    
    <div class="image">
    <img :src=image2 />
    <div class="text">
    <h4>Lawrence Osuru</h4>
    <p>Dad of Lucas, 4 years old</p>
    </div>
    </div>
    </div>
    <div class="rate3">
    
    <p>⭐⭐⭐⭐⭐</p>
      <p>
      "The platform is so user-friendly and the customer support is excellent. We found our daycare within a week and couldn't be happier with our choice!"
      </p>
    
    <div class="image">
    <img :src=image3 />
    <div class="text">
    <h4>Lisa Njoki</h4>
    <p>Mom of Sofia, 2 years old</p>
    </div>
    </div>
    </div>
    </div>
    </div>
</template>

<style scoped>
.testimonials{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    padding:1rem;
}

h4{
margin-bottom: 0rem;
}

h1{
    margin-top:1rem;
    font-size:2.5rem;
    font-weight:700;
}
.first{
    color:grey;
    font-weight:800;
    line-height:1.5;
    margin-bottom: 1rem;
}
p{
    color:grey;
    line-height:1.5;
}

.testimonial{
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

}
.rate1,.rate2,.rate3{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 27%;
    height:16rem;
    margin: 1rem;
    padding: 1rem;
    
 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.image{
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    /* padding: 2rem; */
}
.text{
     display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:50%;
    padding:1rem;
}
.image img{
    border-radius: 50%;
    width: 20%;
}
</style>