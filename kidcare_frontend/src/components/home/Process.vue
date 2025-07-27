<template>
    <div class="process">
    <h1>How KidCare Works</h1>
    <p>Simple steps to find your perfect daycare match</p>

    <div class="steps">
    <div class="step1">
    <p class="step"><span> 1️⃣</span></p>
    <h3>Search & Discover</h3>
    <p class='paragraph'>Enter your location and preferences to find daycare centers near you. Filter by age, programs, and budget.</p>
    </div>
    <div class="step1">
    <p class="step"><span> 2️</span></p>
    <h3>Compare & Review</h3>
    <p class='paragraph'>Read reviews, view photos, and compare different daycare options. Schedule virtual or in-person tours.</p>
    </div>
    <div class="step1">
    <p class="step"><span> 3️</span></p>
    <h3>Book & Enroll</h3>
    <p class='paragraph'>Complete enrollment online with secure payments. Start your child's daycare journey with confidence.</p>
    </div>
    </div>
    </div>
</template>

<style scoped>
.process{
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background-color:#f4ece1;

}

.steps{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
     text-align:center;
}

.step{
    width:6rem;
    height:6rem;
    background-color:rgb(161, 161, 235);
 display:flex;
    justify-content:center;
    align-items:center;
     text-align:center;
     border-radius: 50%;
     margin:1rem
}

.step1,.step2,.step3{
    
    width:30%;
    height:80%;
    padding:1rem;
    margin:2rem;
    margin-bottom: 3rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align: center;
 
}

.paragraph{
      color:#2e2a2a;
    line-height:1.5;
}
span{
    
    font-size:2.0rem; 
}
h3{
margin-bottom: 1rem;
}

h1{
    margin-top:1rem;
    font-size:2.5rem;
    font-weight:700;
}
p{
    color:grey;
    font-weight:800;
    line-height:1.5;
}
</style>