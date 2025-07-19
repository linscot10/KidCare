<script setup>
import Navbar from '../components/Navbar.vue';
</script>
<template>
    <Navbar/>
    <div class="container">
        <div class="hero">
            <h1>Revolutionizing Childcare access</h1>
            <p>Affordable, high-quality childcare for every family—anytime, anywhere. We're making access simple, inclusive, and community-powered.</p>

          <div class="btns">
            <button><router-link to="/register">Get Started</router-link></button>
             <button><router-link to="/about">Learn More </router-link></button>
          </div>
        </div>

        <div class="hero-image">
                <svg viewBox="0 0 200 120" fill="none">
                  <rect x="0" y="0" width="200" height="120" rx="10" fill="#ffffff22" />
                  <rect x="30" y="20" width="20" height="80" fill="#ffffff55" />
                  <circle cx="100" cy="60" r="30" fill="#ffffff66" />
                  <circle cx="100" cy="60" r="10" fill="#ffffffaa" />
                  <rect x="150" y="20" width="20" height="80" fill="#ffffff55" />
                  <text x="50" y="115" fill="white" font-size="10">Kid Care</text>
                </svg>
              
        </div>
    </div>
    <div class="features">
      
    </div>
</template>
<style scoped>
.container{
display:flex;
justify-content:center;
align-items:center;
width:100%;

}
.hero{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:50%;
  padding:0.5rem;
  margin: 2rem;
}
.hero h1{
  font-weight:600;
  color:green;
  white-space:nowrap;
  font-size:2rem;
  padding:0.5rem;
}
.hero p{
  line-height:1.5;
  font-weight: 400;
}
.hero-image{
  margin-left:1.65rem;
   margin-top: 2rem;
  display:flex;
  flex-direction:column;
  width:50%;
  align-items: flex-end;
  padding:2rem;
}
.hero-image svg{
   padding:2rem;
   margin: 2rem;
   background-color:rgb(168, 194, 168);
   border-radius:0.5rem;
}

.hero-image svg text{
  font-size:1rem;
}
.btns{
  display:flex;
  justify-content:center;
  align-items:center;
  margin:2rem;
}

.btns button{
  background-color:#fff;
  width:10rem;
  height:3rem;
  border-radius:1rem;
  border-style: none;
  margin:1rem;
  transition:all 1s ease-in-out;
}
.btns button a{
  text-decoration: none;
  font-size:1.5rem;
  color:green;
  transition:transform 1s ease;
  transition:all 1s ease-in-out;

}

.btns button:hover{
background-color:green;
transition:transform 1s ease;

}

.btns button a:hover{
color:white;
transition:transform 1s ease;
}
</style>