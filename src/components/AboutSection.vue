<template>
  <section id="about" class="fade-in py-16 px-4 max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-4">Über uns</h2>
    <p>Als Familienbetrieb mit jahrelanger Erfahrung im Tischlerhandwerk stehen wir für Qualität, Nachhaltigkeit und Präzision. Bei AusbauSchmidt setzen wir auf regionale Materialien und kreative Lösungen für Ihre Räume.</p>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const el = document.getElementById('about')
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
