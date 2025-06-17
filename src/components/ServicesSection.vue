<template>
  <section id="services" class="fade-in py-16 px-4 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8">Unsere Leistungen</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-white p-6 border-l-4 border-orange-500 shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 class="text-xl font-semibold mb-2">Innenausbau</h3>
        <p>Hochwertiger Innenausbau mit Liebe zum Detail.</p>
      </div>
      <div class="bg-white p-6 border-l-4 border-orange-500 shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 class="text-xl font-semibold mb-2">Holzbau</h3>
        <p>Traditionelles Handwerk trifft modernes Design.</p>
      </div>
      <div class="bg-white p-6 border-l-4 border-orange-500 shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 class="text-xl font-semibold mb-2">Maßanfertigungen</h3>
        <p>Individuelle Lösungen exakt nach Ihren Vorstellungen.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const el = document.getElementById('services')
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
