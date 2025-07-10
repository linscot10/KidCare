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
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <router-link to="/">KidCare</router-link>
            </div>
            <div class="menu-icon" @click="toggleMenu">
                <i :class="isOpen?'fas fa-times':'fas fa-bars'"></i>
            </div>
            <ul :class="{ 'nav-links': true, 'open': isOpen }">
                <li><router-link to="/" @click="closeMenu">Home</router-link></li>
                <li><router-link to="/about" @click="closeMenu">About</router-link></li>
                <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
                <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
            </ul>
            <div class="btns">
            <button ><router-link  to='/register' >Register</router-link></button>    
            <button><router-link to='/login' >Login</router-link></button>    
             </div>
        </div>

    </nav>
</template>

<style scoped>
.navbar {
  background-color: green;
  padding: 1rem;
  color: white;
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
display: flex;
  align-items: center;
   padding: 0 20px;
  height: 60px;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
 align-items: center;
 width: 100%;
 height: 60px;
}

/* Logo */
.logo a {
  color: white;
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: bold;
}

/* Navigation Links */
.nav-links {
  display: flex;
  list-style: none;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 20rem;
  height: 40px;
  font-size: 1.2rem;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #1e90ff;
}

/* Hamburger Menu */
.menu-icon {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.btns{
  display:flex;
  justify-content:center;
  align-items:center;
  margin-right:5rem;
}

/* Mobile Styles */
@media (max-width: 768px) {
   /* .navbar{
        width: 100%;
        height:100%;
        display: block;
    }*/
    .container{
    flex-direction: column;
    align-items: flex-start;
    padding-top: 60px;
    }
  .menu-icon {
 display: block;
    position: absolute;
    top: 18px;
    right: 20px;  }

  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 60px;
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
}

</style>