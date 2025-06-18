<template>
  <section id="contact" class="fade-in py-16 px-4 max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-4">Kontakt</h2>
    <p>
      Telefon: <a class="text-orange-600" href="tel:+491732984466">+49 173 2984466</a><br />
      E-Mail: <a class="text-orange-600" href="mailto:ausbauschmidt@outlook.de">ausbauschmidt@outlook.de</a><br />
      Adresse: Halterner Str. 210, 45770 Marl
    </p>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const el = document.getElementById('contact')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show')
    })
  })
  observer.observe(el)
})
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.show {
  opacity: 1;
  transform: none;
}
</style>
