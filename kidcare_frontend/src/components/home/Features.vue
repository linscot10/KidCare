<script setup>

</script>

<template>
    <div class="Features">
       <h1>Why Parents Choose KidCare</h1>
       <p class='para'>Everything you need to find, book, and manage your child's daycare experience in one simple platform.</p>
       <div class='cards'>
       <div class='card'>

        <div class='card1'>
         <p class='search'> <span >🔍</span></p>
      
        <h3>Smart Search & Filters</h3>
        <p>Find daycare centers by location, age groups, special programs, and budget. Our intelligent matching connects you with the perfect fit.</p>
            
        </div>

       <div class='card2'>
       <p class='rating'> <span >⭐</span></p>

<h3>Verified Reviews & Ratings</h3>
<p>Read authentic reviews from real parents. All daycare providers are background-checked and verified for your peace of mind.</p>
        
       </div>
       </div>

       <div class='card'>

          <div class='card3'>
<p class='book'> <span >📅</span></p>
            
            <h3>Easy Booking & Scheduling</h3>
            <p>Book visits, schedule tours, and manage enrollment all online. Real-time availability and instant confirmations.</p>
          </div>

            <div class='card4'>
<p class='communication'> <span >💬</span></p>
                       
                <h3>Direct Communication</h3>
                <p>Stay connected with your daycare provider through our secure messaging system. Get daily updates and photos of your child.</p>
            </div>
        
       </div>
        <div class='card'>

            <div class='card5'>
<p class='secure'> <span >🔒</span></p>
                <h3>Safe & Secure</h3>
                <p>Your family's privacy is our priority. All data is encrypted and we follow strict safety protocols for child protection.</p>
          </div>

            <div class='card6'>
            <p class='app'> <span >📱</span></p>
                            
                    <h3>Mobile App
                    </h3>
                    <p>Manage everything on-the-go with our mobile app. Get notifications, view updates, and communicate with providers anywhere.
                    </p>
            </div>
        
        </div>

       </div>
    </div>
    
  
</template>

<style scoped>
.Features{
    padding:50px;
    margin:50px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:#fff;
    
}
.para{
    margin-bottom:3rem;
    color:grey;
    font-size: 1.5rem;
    font-weight: 400;
}


.cards{
    margin:0;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

}
.card{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.card1,.card2,.card3,.card4,.card5,.card6{
    width:30%;
    height:80%;
    padding:1rem;
    margin:2rem;
    border-radius:0.8rem;
    transition: transform 0.3s ease;
      
  cursor: pointer;
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:flex-start;
  text-align: start;
}
.card1{
background-color: #e0e0ef;
}
.card2{
background-color: #ccefcc;
}
.card3{
background-color: #f9dcf9;
}
.card4{
background-color: #ddcca0;
}
.card5{
background-color: #fde2fd;
}
.card6{
background-color: rgb(195, 245, 245);
}

.card1:hover,
.card2:hover,
.card3:hover,
.card4:hover,
.card5:hover,
.card6:hover{
    transform:translateY(-10px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1{
    font-size:2.8rem;
    font-weight:700;
}

p{
    color:grey;
    font-weight:800;
    line-height:1.5;
}
span{
    
    font-size:2.0rem;
    
    
}
.search{
    width:3rem;
    height:3rem;
    border-radius:15%;

    background-color:#6969d6;
    margin-bottom: 1rem;
    text-align: center;
}
.rating{
    width:3rem;
    height:3rem;
    background-color:#61db61;
    border-radius:15%;
    margin-bottom: 1rem;
    text-align: center;
}
.book{
    width:3rem;
    height:3rem;
    background-color:#9c3d9c;
    border-radius:15%;
    margin-bottom: 1rem;
    text-align: center;
}
.communication{
    width:3rem;
    height:3rem;
    background-color:goldenrod;
    border-radius:15%;
    margin-bottom: 1rem;
    text-align: center;
}
.secure{
    width:3rem;
    height:3rem;
    background-color:rgb(239, 155, 169);
    border-radius:15%;
    margin-bottom: 1rem;
    text-align: center;
}
.app{
    width:3rem;
    height:3rem;
    background-color:teal;
    border-radius:15%;
    margin-bottom: 1rem;
    text-align: center;

}


h3{
padding-bottom: 1rem;
}
p{
    margin:1rem 0 1rem 0;
}
</style>