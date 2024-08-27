<template>
  <section>
    <contentCard>
      <h2>Employees</h2>
      <hr class="divider" />

      <div class="grid-container">
        <div v-for="employee in employees" :key="employee.id" class="employee-card grid-item">
          <img class="employee-icon" :src="getImagePath(employee)" alt="Profile Pic" />
          <div class="employee-details">
            <p class="employee-name">{{ employee.goByName }} {{ employee.lastName }}</p>
            <p class="employee-email">{{ employee.email }}</p>
          </div>
        </div>
      </div>
    </contentCard>
  </section>
</template>

<script>
import contentCard from '../cards/Content_Cards/ContentCard.vue'
import { computed } from 'vue'
import useEmployeeStore from '@/stores/employees'

export default {
  name: 'EmployeeLibrary',
  components: {
    contentCard
  },
  setup() {
    const employeeStore = useEmployeeStore()

    const employees = computed(() => employeeStore.getItems)
    const directory = '/src/_assets/images/employees/'

    const getImagePath = (employee) => {
      return directory + employee.imageFileName
    }

    return {
      employees,
      getImagePath
    }
  }
}
</script>
