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
    status: 0,
    tasks: '',
    BackLog: '',
    Todo: '',
    Doing: '',
    Done: ''
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
    },
    setBackLog (state, payload) {
      state.BackLog = payload
    },
    setTodo (state, payload) {
      state.Todo = payload
    },
    setDoing (state, payload) {
      state.Doing = payload
    },
    setDone (state, payload) {
      state.Done = payload
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
        status: 0
      }, function (err) {
        if (err) console(err)
        self.state.task = ''
        self.state.description = ''
        self.state.point = 0
        self.state.assignedTo = ''
      })
    },
    getTask (context, payload) {
      database.ref('task/').on('value', function (snapshot) {
        var result = snapshot.val()
        let dataBackLog = []
        let dataTodo = []
        let dataDoing = []
        let dataDone = []
        for (var index in result) {
          let task = result[index]
          task.id = index
          if (Number(task.status) === 0) {
            dataBackLog.push(task)
          } else if (Number(task.status) === 1) {
            dataTodo.push(task)
          } else if (Number(task.status) === 2) {
            dataDoing.push(task)
          } else if (Number(task.status) === 3) {
            dataDone.push(task)
          }
        }
        context.commit('setTasks', result)
        context.commit('setBackLog', dataBackLog)
        context.commit('setTodo', dataTodo)
        context.commit('setDoing', dataDoing)
        context.commit('setDone', dataDone)
      })
    },
    removeTask (context, id) {
      database.ref(`task/${id}`).remove()
    },
    updateTask (context, data) {
      if (data.move) {
        data.task.status--
      } else {
        data.task.status++
      }
      database.ref(`task/${data.task.id}`).set(data.task)
    }
  }
})
