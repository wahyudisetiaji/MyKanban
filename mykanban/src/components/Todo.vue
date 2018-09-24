<template>
  <div
    id="e3"
    style="max-width: 400px; margin: auto;"
    class="grey todo lighten-3"
  >
    <v-toolbar
      color="green"
      dark
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Todo</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 v-for="(data, index) in Todo" :key="index" v-if="data.status === `Todo`">
               <v-card color="blue-grey darken-2" class="white--text" >
                <v-card-text >
                  <div class="title text-lg-left">Task : {{data.task}}</div>
                  <div class="subheading text-lg-left">Description : {{data.description}}</div>
                  <div class="subheading text-lg-left">Point : {{data.point}}</div>
                  <div class="subheading text-lg-left">Assigned To : {{data.assignedTo}}</div>
                </v-card-text>
                <v-layout row wrap>
                    <v-flex xs4>
                      <a href="#" @click="updateTaskBackLog(data, index)">
                          <i class="fa fa-arrow-circle-left" style="font-size:48px;color:#00B746"></i>
                      </a>   
                    </v-flex>
                    <v-flex xs4>
                      <a href="#" @click="deleteTask(index)">
                        <i class="fa fa-times-circle" style="font-size:48px;color:#00B746"></i>
                      </a>  
                    </v-flex>
                     <v-flex xs4>
                      <a href="#" @click="updateTaskDoing(data, index)">
                          <i class="fa fa-arrow-circle-right" style="font-size:48px;color:#00B746"></i>
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
  props: ['Todo'],
  methods:{
    ...mapActions([
      'updateBackLog', 'updateDoing', 'removeTask'
    ]),
    updateTaskBackLog(data, index) {
      let object = {
        id: index,
        task: data.task,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: data.status
      }
      this.updateBackLog(object)
    },
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
    deleteTask(index) {
      console.log(index);
      
      this.removeTask(index)
    }
  }
}
</script>

<style>
.todo {
  padding: 10px;
}
</style>
