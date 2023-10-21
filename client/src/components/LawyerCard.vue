<template>
    <div class="container">
      <div>
        <router-link
         v-for="(lawyer, index) in lawyers" :key="lawyer.id"
          :to="{ name: 'attorney-profile', params: { name: lawyer.name.toLowerCase().replace(/\s+/g, '-') } }">
          <div
            class="lawcard-container border border-info"
            @mouseover="isFlipped[index] = true"
            @mouseleave="isFlipped[index] = false"
            
            
          >
            <div class="lawcard" :class="{'flipped': isFlipped[index]}">
              <div class="front">
                <div class="lawyer-info">
                  <h3>{{ lawyer.name }}</h3>
                  <p>{{ lawyer.position }}</p>
                </div>
                <div class="image-container">
                  <img :src="lawyer.picture" alt="Lawyer Picture">
                </div>
              </div>
              <div class="back">
                <div class="lawyer-info">
                  <h3>{{ lawyer.name }}</h3>
                  <p>{{ lawyer.qualifications }}</p>
                  <p>{{ lawyer.speciality }}</p>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur nihil, nemo, quidem debitis iure est nostrum harum facilis commodi vitae, dolore porro sequi suscipit!</p>
                  </div>
                  <div class="contact-icons mt-5 ">
                    <a :href="'tel:' + lawyer.phone"><i class="icon pi pi-phone"></i>
                    </a>
                    <a :href="'mailto:' + lawyer.email"><i class="icon pi pi-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import 'primeicons/primeicons.css';

  export default {
    data() {
      return {
        isFlipped: [], 
        lawyers: [
          {
            id: 1,
            name: "Jared Magolo",
            position: "Senior Attorney",
            picture: "https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/260719226_254231846773915_3370914882371276526_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH2m-iX_IK95ptn4ueWqARNJ5tqi3X_xqUnm2qLdf_GpZSZ8PFmgEeh6Gks7mTicDXVvkQuS2XfF1ZzwKAMxEjp&_nc_ohc=xVYikyUD8VEAX_KW-Iq&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fmba5-1.fna&oh=00_AfDXXbU1saqyHTITZsGfxSDNWW95-cFcNl9HZ0GXeWCssA&oe=65368A2F",
            qualifications: "LLM, JD",
            speciality: "Criminal Law",
            phone: "123-456-7890",
            email: "johndoe@example.com",
          },
          {
            id: 2,
            name: "Paul Magolo",
            position: "Associate Attorney",
            picture: "https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/306317145_439746158222482_5750427755809746741_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG5gDpjQ1jI4-HgtVPZk9IouC3jFWBxpu24LeMVYHGm7ck8mY5JmTGKY-BioWqScKzmV3t3WaoNjttZt6zfofdE&_nc_ohc=UFIR9fXWyYwAX9VF_E1&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fmba5-1.fna&oh=00_AfD2j8jRv-Mj7MC0iYmloo7Fd8u69hS0H0zvYRSa5G03Ow&oe=65356FBB",
            qualifications: "LLB, LLM",
            speciality: "Criminal Law",
            phone: "072-567-7133",
            email: "janesmith@example.com",
          },
        
          //
          // Add more lawyers here...
        ],
      };
    },
    created() {
      // Initialize the isFlipped array with false for each card
      this.isFlipped = this.lawyers.map(() => false);
    },
  };
  </script>
  
  <style>
  /* .container {
    padding-top: 20px;
  } */
  
  .lawcard-container {
    display: inline-block;
    perspective: 1000px;
    margin: 10px;
  }
  
  .lawcard {
    width: 300px;
    height: 480px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  
  .front,
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
  }
  
  .front {
    z-index: 2;
    transform: rotateY(0deg);
    overflow: hidden;
  }
  
  .back {
    transform: rotateY(180deg);
    padding: 10px;
  }
  
  .flipped {
    transform: rotateY(180deg);
  }
  
  .lawyer-info {
    text-align: center;
  }
  
  h3 {
    margin: 0;
  }
  
  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  
  .contact-icons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .contact-icons a {
    margin: 0 5px;
    color: #007bff;
    font-size: 24px;
  }
  </style>
  
