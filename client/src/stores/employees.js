import { defineStore } from 'pinia'
import { employees } from '@assets/employees.js'
import model from '@models/app_models/employee.js'

export const useEmployeeStore = defineStore('employees', {
  state: () => ({
    items: employees
  }),
  getters: {
    getItems: (state) => {
      const items = state.items.map((item) => {
        return new model(item)
      })
      return items
    },
    getItemById: (state) => (id) => {
      const item = state.items.find((item) => item.id === id)
      return new model(item)
    }
  }
})

export default useEmployeeStore
