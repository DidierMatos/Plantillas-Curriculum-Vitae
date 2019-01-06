<template>
  <v-app class="main">


    <v-content>
      <PlantillaCV1/>
    </v-content>
  </v-app>
</template>

<script>
import PlantillaCV1 from './components/PlantillaCV1'

export default {
  name: 'App',
  components: {
    PlantillaCV1
  },
  data () {
    return {
      //
    }
  }
}
</script>
