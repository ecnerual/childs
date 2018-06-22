<template>
 <v-container fluid grid-list-lg>
  <v-layout row>
  <v-flex xs12 sm10 offset-sm1>
      <v-list>
         <v-list-tile v-for="(kid, index) in allKids" :key="index" @click.native="removeKid({ id: kid.id })">
           <v-list-tile-avatar>
             <img :src="kid.icon">
           </v-list-tile-avatar>
           <v-list-tile-content>
             <v-list-tile-title v-text="kid.name"></v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>

      </v-list>
      <v-btn
        fab
        small
        bottom
        left
        @click.native="addKid({ kid: { name: 'yolo', id: 2}})"
        absolute
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Kid from '@/components/Kid.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
import { ADD_KID, REMOVE_KID } from '@/action-types'

export default {
  name: 'kids',
  computed: { ...mapGetters(['allKids'])}, 
  components: {
    Kid
  },
  methods: {
    ...mapActions([ADD_KID, REMOVE_KID])
  }
}
</script>

