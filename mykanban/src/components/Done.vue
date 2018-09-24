<template>
  <div
    id="e3"
    style="max-width: 400px; margin: auto;"
    class="grey done lighten-3"
  >
    <v-toolbar
      color="red"
      dark
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Done</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 v-for="(data, index) in Done" :key="index" v-if="data.status === `Done`">
               <v-card color="blue-grey darken-2" class="white--text" >
                <v-card-text >
                  <div class="title text-lg-left">Task : {{data.task}}</div>
                  <div class="subheading text-lg-left">Description : {{data.description}}</div>
                  <div class="subheading text-lg-left">Point : {{data.point}}</div>
                  <div class="subheading text-lg-left">Assigned To : {{data.assignedTo}}</div>
                </v-card-text>
                <v-layout row wrap>
                    <v-flex xs6>
                      <a href="#" @click="updateTaskDoing(data, index)">
                          <i class="fa fa-arrow-circle-left" style="font-size:48px;color:#FF2104"></i>
                      </a>   
                    </v-flex>
                    <v-flex xs6>
                      <a href="#" @click="deleteTask(index)">
                        <i class="fa fa-times-circle" style="font-size:48px;color:#FF2104"></i>
                      </a>  
                    </v-flex>
                  </v-layout>
              </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['Done'],
  methods:{
    ...mapActions([
      'updateDoing', 'removeTask'
    ]),
    updateTaskDoing(data, index) {
      let object = {
        id: index,
        task: data.task,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: data.status
      }
      this.updateDoing(object)
    },
    deleteTask(id) {
      this.removeTask(id)
    }
  }
}
</script>

<style>
.done {
  padding: 10px;
}
</style>
