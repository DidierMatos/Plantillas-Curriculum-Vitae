<template>
  <v-app class="main">
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
  
      <v-toolbar-title class="white--text"><v-icon>format_list_bulleted</v-icon> Aplicación web traductor de texto a Morse y viceversa</v-toolbar-title>
  
      <v-spacer></v-spacer>
  
      <!-- <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
  
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
  
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn> -->
  
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

    </v-toolbar>

    <v-content>
      <traductor/>
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
