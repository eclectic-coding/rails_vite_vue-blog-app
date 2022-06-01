<template>
  <main>
    <header>
      <Link href="/">Home</Link>
    </header>
    <div>
      <slot />
    </div>
  </main>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  name: 'Layout',
  components: {
    Link,
  }
}
</script>