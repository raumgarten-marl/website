<template>
  <section id="legal" class="fade-in py-16 px-4 max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold mb-4">Impressum</h2>
    <p>
      AusbauSchmidt, Halterner Str. 210, 45770 Marl<br />
      +49 173 2984466<br />
      ausbauschmidt@outlook.de<br />
      ausbauschmidt.de<br />
      Vertretungsberechtigter Geschäftsführer: Andreas Schmidt<br />
      Registernummer: HRB 0123<br />
      Registergericht: Handwerkskammer<br />
      Umsatzsteuer-Identifikationsnummer gem. §27a UStG: Amtsgericht Marl<br />
      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Andreas Schmidt
    </p>

    <h2 class="text-3xl font-bold mt-8 mb-4">Datenschutz</h2>
    <p>
      Firma AusbauSchmidt, Halterner Str. 210, 45770 Marl<br />
      Telefon: +49 173 2984466<br />
      E-Mail: ausbauschmidt@outlook.de<br />
      Verantwortlich: Andreas Schmidt
    </p>

    <h2 class="text-3xl font-bold mt-8 mb-4">AGB</h2>
    <p>
      Unsere Angebote basieren auf den nachfolgenden Allgemeinen Geschäftsbedingungen. Diese gelten mit Auftragserteilung als anerkannt. Vollständige rechtliche Inhalte sind im Repository oder auf Anfrage verfügbar.
    </p>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const el = document.getElementById('legal')
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
