<template>
  <div class="container-fluid">
        <v-layout class="task" row wrap>
          <v-flex xs12>
            <NewTask></NewTask>
          </v-flex>
        </v-layout> 
        <v-layout class="home" row wrap>
            <v-flex xs3> 
              <Task :dataTask="BackLog" :status="0"></Task>
            </v-flex>
            <v-flex xs3>
              <Task :dataTask="Todo" :status="1"></Task>
            </v-flex>
            <v-flex xs3>
              <Task :dataTask="Doing" :status="2"></Task>
            </v-flex>
            <v-flex xs3>
              <Task :dataTask="Done" :status="3"></Task>
            </v-flex>
      </v-layout>
  </div>
</template>

<script>
import Task from '@/components/Task.vue'
import NewTask from '@/components/NewTask.vue'
import {mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
      dialog: false
    }
  },
  name: 'home',
  components: {
   Task,
   NewTask
  },
  computed: {
    ...mapState([
      'BackLog',
      'Todo',
      'Doing',
      'Done'
    ])
	},
	mounted () {
    this.getTask()
	},
	methods: {
    ...mapActions([
      'getTask'
    ])
  }
}
</script>

<style>
.task {
  margin-top: 20px;
}
.home {
  margin: 20px;
}
.logo-ws{
    width: 30%;
}
h1 {
  color: #0090ff;
}
.navbar a {
    color:#293D52;
}

</style>
