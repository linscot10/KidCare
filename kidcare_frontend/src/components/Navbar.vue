<script setup>
import {ref} from 'vue'

const showMobileMenu= ref(false)

const showMenu =()=>{
    showMobileMenu.value=!showMobileMenu.value
}

const closeMenu=()=>{
    showMobileMenu.value=false
}
</script>

<template>
  <header>
  <i 
class="fas fa-bars" 
@click="showMenu()"> 
</i>
    
      <nav class="navbar" :class="showMobileMenu ? 'open-menu' : 'closed-menu'">
         <div class="logo">
                <router-link to="/">
                <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="50" font-size="30" font-family="Arial" fill="#fff">KidCare</text>
             </svg></router-link>
 <small>Your Partner in Reliable Childcare Access</small>
            </div>
        <div class="container">
            <ul :class="{ 'nav-links': true }">
                <li><router-link to="/" @click="closeMenu" >Home</router-link></li>
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
   box-shadow: 0 2px 4px rgba(0,0,0,0.05);
background-color: green;
padding: 1rem;
  color: white;
  position:fixed;
   top: 0;
  left: 0;
  width: 100%;
/*display: flex;*/
 flex-direction: column; 
 align-items: stretch;
  /*align-items: center;*/
  height: auto;
  z-index: 1000;

}
.navbar {
   display: flex;
      gap: 1.563rem;
      align-items: center;
      margin-right: 0.625rem;
      margin-left: 0.625rem;
        transition: all 0.3s ease;
 
}

.container {
  display: flex;
  justify-content: space-between;
 align-items: center;
 width: 100%;
 height: auto;
}

/* Logo */
.logo a {
  color: white;
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: bold;
  
}
.logo{
   white-space: nowrap;
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
  /*height: 2.5rem;*/
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


.btns{
  display:flex;  
 margin-left:8rem;
      padding: .5rem 1rem;      
      font-weight: 600;
      margin-right:0.8rem;
     
}

button{
  margin-right:0.8rem;
  color: white;
  margin: 1.7rem;
  background-color: yellowgreen;
  color: white;
   border-radius: 0.3rem;
   cursor: pointer;
    border: none;
     transition: 0.2s;
}

button a {
  color: white;
  text-decoration: none;
  display: block;
  width: 100%;
}
button:hover{
 opacity: 0.5;
 color: #FFF;
}

i{
  display: none;
    font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-start;
  margin-bottom: 1rem;
}

/* Mobile Styles */


@media (max-width: 768px) {

  header{
    padding: 1rem;
    position: fixed;
width: 100%;
height: auto;

  }

  .open-menu {
opacity: 1;
/*height: auto;*/
 overflow: visible;
    display: flex;
    max-height: 1000px;
}

.closed-menu {
  display:none;
opacity: 0;
height: 0;
padding: 0;
overflow: hidden;
  transition: all 0.3s ease;
}
.navbar{
  flex-direction: column;
  z-index: 100;
  position: relative;
  transition: all 0.2s ease-out;
  padding: 0 1rem;
  width: 100%;
  height: auto;
}

.nav-links{
  flex-direction: column;
  font-size: 0.5rem;
  margin-top: 0;

}
i{
  display: block;
   text-align: right;
   padding: 0 0.625rem 0 0.625rem;
}
   
    .container{
      width: 100%;
    flex-direction: column;
    height: auto;
    margin-right: 100px;
    
    }
.logo{
  padding:0;
  margin-left: 100px;
  width: 100%;

}

  
 
  .btns{
    flex-direction: column;
    width:100%;
    margin-left: 170px;
   
   }
   button{
    width:50%;
    margin: 0.625rem;
    margin-left: 5rem;
   
   }
} 



</style>