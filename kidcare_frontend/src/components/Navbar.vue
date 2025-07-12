<script setup>
import {ref} from 'vue'

const isOpen= ref(false)

const toggleMenu =()=>{
    isOpen.value=!isOpen.value
}

const closeMenu=()=>{
    isOpen.value=false
}
</script>

<template>
  <header>
     <div class="logo">
                <router-link to="/">
                <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="50" font-size="30" font-family="Arial" fill="#fff">KidCare</text>
             </svg></router-link>
 <small>Your Partner in Reliable Childcare Access</small>
            </div>
      <nav class="navbar">
        <div class="container">
            <ul :class="{ 'nav-links': true, 'open': isOpen }">
                <li><router-link to="/" @click="closeMenu">Home</router-link></li>
                <li><router-link to="/about" @click="closeMenu">About</router-link></li>
                <li><router-link to="/daycares" @click="closeMenu"> Available Daycares</router-link></li>
                <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
                <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
            </ul>
            <div class="btns">
            <button ><router-link  to='/register' >Register</router-link></button>    
            <button><router-link to='/login' >Login</router-link></button>    
             </div>
        </div>

    </nav>
    </header>
  
</template>

<style scoped>

text {
  fill: #FFF;
  transition: fill 0.3s ease;
}

text:hover {
  fill: rgb(153, 153, 0);
}

header{
  padding: 1.25rem 10%;
   box-shadow: 0 2px 4px rgba(0,0,0,0.05);
background-color: green;
padding: 1rem;
  color: white;
  position:fixed;
   top: 0;
  left: 0;
  width: 100%;
display: flex;
  align-items: center;
   padding: 0 1.25rem;
  height: 6rem;
  z-index: 1000;
}
.navbar {
   display: flex;
      gap: 1.563rem;
      align-items: center;
      margin-right: 10px;
      margin-left: 10px;
 
}

.container {
  display: flex;
  justify-content: space-between;
 align-items: center;
 width: 100%;
 height: 4rem;
}

/* Logo */
.logo a {
  color: white;
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: bold;
  
}
.logo{
  display: flex;
  flex-direction: column;
  margin: 2.5rem;
  justify-content: center;
  align-items: center;
  
}

/* Navigation Links */
.nav-links {
  width: 30rem;
  list-style: none;
  gap: 2.25rem;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 2.5rem;
  font-size: 1.2rem;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
   white-space: nowrap;
}

.nav-links li a:hover {
  color: #1e90ff;
}


.btns,button{
  display:flex;  
 margin-left:2.5rem;
      padding: .5rem 1rem;
      border: none;
      cursor: pointer;
      border-radius: 0.3;
      font-weight: 600;
}
button{
  margin: rem;
}


/* Mobile Styles */

/*
@media (max-width: 768px) {
    .navbar{
        width: 100%;
        height:100%;
        display: block;
    }
    .container{
    flex-direction: column;
    align-items: flex-start;
    padding-top: 3.75rem;
    }

  .menu-icon {
    display: block;
    position: absolute;
    top: 1.125rem;
    right: 1.25rem;  }

  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 3.75;
    left: 0;
    width: 100%;
    background-color: #333;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    padding: 1rem;
  }
  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

   .nav-links li {
    margin-bottom: 0.5rem 0;
    }
} */



</style>