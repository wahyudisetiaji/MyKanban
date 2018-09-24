<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn slot="activator" class="buttontask">New Task</v-btn>
      <v-card class="modaltask" >
        <v-card-title class="title-modal">
          <span class="headline">Add New Task</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Task" type="text" v-model="task" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Description" type="text" v-model="description" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Point" type="number" v-model="point" required></v-text-field>
              </v-flex>
               <v-flex xs12>
                <v-text-field label="Assigned to" type="text" v-model="assignedTo" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="createTask" >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    data: () => ({
      dialog: false
    }),
    computed: {
        ...mapState([
            'task',
            'description',
            'point',
            'assignedTo',
        ]),
        task: {
            get () {
                return this.$store.state.task
            },
            set (value) {
                this.$store.commit('setTask', value)
            }
        },
        description: {
            get () {
                return this.$store.state.description
            },
            set (value) {
                this.$store.commit('setDescription', value)
            }
        },
        point: {
            get () {
                return this.$store.state.point
            },
            set (value) {
                this.$store.commit('setPoint', value)
            }
        },
        assignedTo: {
            get () {
                return this.$store.state.assignedTo
            },
            set (value) {
                this.$store.commit('setAssignedTo', value)
            }
        }
    },
    methods: {
        ...mapActions([
            'createTask'
        ])
    }
  }
</script>

<style>
.title-modal {
    background-color: #0090ff;
}
.buttontask {
    background-color: #0090ff;
}

.modaltask {
    background-color: white;
}
</style>
