<template>
	<BaseView :includeGoHomeButton="false">
		<template #default>
			<alertBox
				v-if="developerMessage.show"
				:message="developerMessage.message"
				:type="developerMessage.type"
				:displayOnOpen="true"
			></alertBox>

			<h1 class="home-message">Connecting you with reliable local services.</h1>

			<greeting></greeting>

			<div class="locations-container">
				<h2>Currently servicing:</h2>

				<div v-for="location in servicedLocations" :key="location.id" class="location-card">
					<ul class="location-list">
						<li>{{ location.townName }} {{ location.state }}, {{ location.zipCode }}</li>
					</ul>
				</div>
			</div>



			<div class="services-container">
				<h2>Services we offer:</h2>

				<table>
					<thead>
					<tr>
						<th>Service</th>
						<th>Price</th>
						<th>Notes</th>
					</tr>
					</thead>

					<tbody>
					<tr v-for="service in services" :key="service.id">
						<td>{{ service.serviceName }}</td>
						<td>${{ service.price }}</td>
						<td>{{ service.notes }}</td>
					</tr>
					</tbody>


				</table>
			</div>
		</template>
	</BaseView>
</template>

<script>
import BaseView from './BaseView.vue'
import alertBox from '@/components/app/mainElements/alerts/alertBox.vue'
import greeting from '@/components/app/mainElements/display/GreetingHome.vue'

// Stores
import useLocationStore from '@/stores/servicedLocations'
import useServiceStore from '@/stores/services'

import { computed } from 'vue'

export default {
	setup() {
		const locationStore = useLocationStore();
		const serviceStore = useServiceStore();

		// ! No Backend to fetch from. This is stored in the store.
		// onBeforeMount(() => {
		//   store.fetchItems()
		// })

		// We use GetItems here, because that will convert the object to a client side object from the store
		const servicedLocations = computed(() => locationStore.getItems)

		const services = computed(() => serviceStore.getItems);

		return {
			servicedLocations,
			services
		}
	},

	name: 'HomeView',
	components: {
		alertBox,
		BaseView,
		greeting
	},
	data() {
		return {
			developerMessage: {
				show: 0,
				message: 'Welcome to the Home View',
				type: 'info'
			}
		}
	}
}
</script>

<style scoped>
h1 {
	margin-bottom: 1rem;
}

.home-message {
	text-align: center;
	margin-bottom: 20px;
	font-size: 24px;
	color: var(--primary-text-color);
}

.force-down {
	margin-top: 5rem;
}
</style>
