import { defineStore } from 'pinia'

// ! Import the DATA that will be used in the store
// *EXAMPLE: import { services } from '../_assets/services.js'

import { employees } from '../_assets/employees.js'

// ! Import the MODEL(s) that will be used in the store
// *EXAMPLE: import { model } from '../_models/app_models/service.js'

import model from '../_models/app_models/employee.js'
// import modelAlt from '../_models/app_models/_ALT_MODEL_NAME.js'

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
