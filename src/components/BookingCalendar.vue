<template>
    <section id="termin" class="py-16 px-4 max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Jetzt Termin vereinbaren</h2>
      <div class="aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl">
        <iframe
          src="https://calendly.com/DEIN-USERNAME/15min"
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </template>
  
  <script setup>
  // Kein JS notwendig
  </script>
  
  <style scoped>
  .aspect-video {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
  }
  .aspect-video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  </style>
  