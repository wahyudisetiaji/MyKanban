<template>
  <div
    id="e3"
    style="max-width: 400px; margin: auto;"
    class="grey backlog lighten-3"
  >
    <v-toolbar
      :color="color"
      dark
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{titleBoard}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 v-for="(data, index) in dataTask" :key="index">
              <v-card color="blue-grey darken-2" class="white--text" >
                <v-card-text >
                  <div class="title text-lg-left">Task : {{data.task}}</div>
                  <div class="subheading text-lg-left">Description : {{data.description}}</div>
                  <div class="subheading text-lg-left">Point : {{data.point}}</div>
                  <div class="subheading text-lg-left">Assigned To : {{data.assignedTo}}</div>
                </v-card-text>
                  <v-layout row wrap>
                      <v-flex xs4>
                      <a href="#" @click="left(data)">
                        <i class="fa fa-arrow-circle-left" v-if="data.status > 0" style="font-size:48px;color:#008FFB"></i>
                      </a>  
                    </v-flex>
                    <v-flex xs4>
                      <a href="#" @click="deleteTask(data.id)">
                        <i class="fa fa-times-circle" style="font-size:48px;color:#008FFB"></i>
                      </a>  
                    </v-flex>
                    <v-flex xs4>
                      <a href="#" @click="right(data)">
                          <i class="fa fa-arrow-circle-right" v-if="data.status < 3" style="font-size:48px;color:#008FFB"></i>
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
  props: ['dataTask', 'status'],
  data () {
    return {
      titleBoard: '',
      color: ''
    }
  },
  methods: {
    ...mapActions([
      'updateTask', 'removeTask'
    ]),
    left(data) {
      this.updateTask({
        task: data,
        move: true
      })
    },
  right(data) {
      this.updateTask({
        task: data,
        move: false
      })
    },
    deleteTask(index) {
      this.removeTask(index)
    },
    titleTask() {
      let status = this.status
      if (status == 0) {
        this.titleBoard = 'BackLog'
        this.color = 'blue'
      } else if (status == 1) {
        this.titleBoard = 'Todo'
        this.color = 'green'
      } else if (status == 2) {
        this.titleBoard = 'Doing'
        this.color = 'yellow'
      } else if (status == 3) {
        this.titleBoard = 'Done'
        this.color = 'red'
      }
    }
  },
  mounted () {
    this.titleTask()
  }
}
</script>

<style>
.backlog {
  padding: 10px;
}
</style>

