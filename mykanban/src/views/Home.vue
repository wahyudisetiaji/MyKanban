<template>
  <div class="container-fluid">
        <v-layout class="task" row wrap>
          <v-flex xs12>
            <NewTask></NewTask>
          </v-flex>
        </v-layout> 
        <v-layout class="home" row wrap>
            <v-flex xs3>
              <BackLog :BackLog="this.tasks"></BackLog>  
            </v-flex>
            <v-flex xs3>
              <Todo :Todo="this.tasks"></Todo>
            </v-flex>
            <v-flex xs3>
              <Doing :Doing="this.tasks"></Doing>
            </v-flex>
            <v-flex xs3>
              <Done :Done="this.tasks"></Done>
            </v-flex>
      </v-layout>
  </div>
</template>

<script>
import BackLog from '@/components/BackLog.vue'
import Doing from '@/components/Doing.vue'
import Todo from '@/components/Todo.vue'
import Done from '@/components/Done.vue'
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
   BackLog,
   Doing,
   Todo,
   Done,
   NewTask
  },
  computed: {
    ...mapState([
      'tasks'
    ])
	},
	mounted () {
    this.getTask()
    this.data = this.tasks
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
