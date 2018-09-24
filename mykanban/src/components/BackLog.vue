<template>
  <div
    id="e3"
    style="max-width: 400px; margin: auto;"
    class="grey backlog lighten-3"
  >
    <v-toolbar
      color="blue"
      dark
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Back-Log</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 v-for="(data, index) in BackLog" :key="index" v-if="data.status === `BackLog`">
              <v-card color="blue-grey darken-2" class="white--text" >
                <v-card-text >
                  <div class="title text-lg-left">Task : {{data.task}}</div>
                  <div class="subheading text-lg-left">Description : {{data.description}}</div>
                  <div class="subheading text-lg-left">Point : {{data.point}}</div>
                  <div class="subheading text-lg-left">Assigned To : {{data.assignedTo}}</div>
                </v-card-text>
                  <v-layout row wrap>
                    <v-flex xs6>
                      <a href="#" @click="deleteTask(index)">
                        <i class="fa fa-times-circle" style="font-size:48px;color:#008FFB"></i>
                      </a>  
                    </v-flex>
                    <v-flex xs6>
                      <a href="#" @click="updateTaskTodo(data, index)">
                          <i class="fa fa-arrow-circle-right" style="font-size:48px;color:#008FFB"></i>
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
  props: ['BackLog'],
  methods: {
    ...mapActions([
      'updateTodo', 'removeTask'
    ]),
    updateTaskTodo(data, index) {
      let object = {
        id: index,
        task: data.task,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: data.status
      }
      this.updateTodo(object)
    },
    deleteTask(index) {
      this.removeTask(index)
    }
  }
}
</script>

<style>
.backlog {
  padding: 10px;
}
</style>

