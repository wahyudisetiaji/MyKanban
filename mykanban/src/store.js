import Vue from 'vue'
import Vuex from 'vuex'
import database from '@/firebase/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: '',
    description: '',
    point: 0,
    assignedTo: '',
    status: '',
    tasks: ''
  },
  mutations: {
    setTask (state, payload) {
      state.task = payload
    },
    setDescription (state, payload) {
      state.description = payload
    },
    setPoint (state, payload) {
      state.point = payload
    },
    setAssignedTo (state, payload) {
      state.assignedTo = payload
    },
    setStatus (state, payload) {
      state.status = payload
    },
    setTasks (state, payload) {
      state.tasks = payload
    }
  },
  actions: {
    createTask (context, payload) {
      let self = this
      database.ref('task/').push({
        task: self.state.task,
        description: self.state.description,
        point: self.state.point,
        assignedTo: self.state.assignedTo,
        status: 'BackLog'
      }, function (err) {
        if (err) console(err)
        self.state.task = ''
        self.state.description = ''
        self.state.point = 0
        self.state.assignedTo = ''
      })
    },
    updateTodo (context, data) {
      database.ref('task/' + data.id).set({
        task: data.task,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: 'Todo'
      })
    },
    updateBackLog (context, data) {
      database.ref('task/' + data.id).set({
        task: data.task,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: 'BackLog'
      })
    },
    updateDoing (context, data) {
      database.ref('task/' + data.id).set({
        task: data.task,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: 'Doing'
      })
    },
    updateDone (context, data) {
      database.ref('task/' + data.id).set({
        task: data.task,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: 'Done'
      })
    },
    getTask (context, payload) {
      database.ref('task/').on('value', function (snapshot) {
        var result = snapshot.val()
        context.commit('setTasks', result)
      })
    },
    removeTask (context, id) {
      database.ref('task/').child(id).remove()
    }
  }
})
