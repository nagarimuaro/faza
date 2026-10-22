<script lang="ts">
  import SiteNav from '$lib/components/SiteNav.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import TrustStrip from '$lib/components/TrustStrip.svelte';
  import CompanySection from '$lib/components/CompanySection.svelte';
  import ServicesSection from '$lib/components/ServicesSection.svelte';
  import IndustriesSection from '$lib/components/IndustriesSection.svelte';
  import ProductShowcase from '$lib/components/ProductShowcase.svelte';
  import ProcessSection from '$lib/components/ProcessSection.svelte';
  import WhySection from '$lib/components/WhySection.svelte';
  import FaqSection from '$lib/components/FaqSection.svelte';
  import BriefBanner from '$lib/components/BriefBanner.svelte';
  import TeamSection from '$lib/components/TeamSection.svelte';
  import RegionalCoverage from '$lib/components/RegionalCoverage.svelte';
  import NagariDirectory from '$lib/components/NagariDirectory.svelte';
  import ClosingSection from '$lib/components/ClosingSection.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import BriefDialog from '$lib/components/BriefDialog.svelte';

  let briefOpen = false;
  const openBrief = () => (briefOpen = true);
  const closeBrief = () => (briefOpen = false);
</script>

<SiteNav onConsult={openBrief} />
<main>
  <HeroSection onConsult={openBrief} />
  <TrustStrip />
  <CompanySection />
  <ServicesSection />
  <IndustriesSection onConsult={openBrief} />
  <ProductShowcase />
  <ProcessSection />
  <WhySection />
  <FaqSection />
  <BriefBanner onConsult={openBrief} />
  <TeamSection />
  <RegionalCoverage />
  <NagariDirectory />
  <ClosingSection onConsult={openBrief} />
</main>
<SiteFooter />
<BriefDialog open={briefOpen} onClose={closeBrief} />
