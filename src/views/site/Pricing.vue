<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-xl w-full space-y-8">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Pricing</h2>
      <div class="flex w-full">
        <div class="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-400 p-4 mr-10">
          <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">Free</p>
          <p class="text-gray-900 dark:text-white text-3xl font-bold">
            $0
            <span class="text-gray-300 text-sm"> / month</span>
          </p>
          <p class="text-gray-600 dark:text-gray-100 text-xs mt-4">
            For small projects
          </p>
          <ul class="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Unlimited Team members</li>
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Unlimited Sprints</li>
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Sprint Scores</li>
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Custom Subdomain</li>
            <li class="mb-3 flex items-center"><BanIcon class="w-4 h-4 mr-2 text-red-500" /> Unlimited Boards <span class="text-gray-300 text-xs p-1">4 Boards on free plan</span></li>
            <li class="mb-3 flex items-center"><BanIcon class="w-4 h-4 mr-2 text-red-500" /> Unlimited Sprint Leaders <span class="text-gray-300 text-xs p-1">1 per board</span></li>
            <li class="mb-3 flex items-center"><BanIcon class="w-4 h-4 mr-2 text-red-500" /> Slack Integration</li>
            <li class="mb-3 flex items-center"><BanIcon class="w-4 h-4 mr-2 text-red-500" /> Teams Integration</li>
            <li class="mb-3 flex items-center"><BanIcon class="w-4 h-4 mr-2 text-red-500" /> Discord Integration</li>
          </ul>
        </div>

        <div class="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-400 p-4">
          <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">Paid</p>
          <p class="text-gray-900 dark:text-white text-3xl font-bold">
            $20
            <span class="text-gray-300 text-sm"> / month</span>
          </p>
          <p class="text-gray-600 dark:text-gray-100 text-xs mt-4">
            For Multi Teams
          </p>
          <ul class="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Unlimited Team members</li>
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Unlimited Sprints</li>
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Sprint Scores</li>
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Custom Subdomain</li>
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Unlimited Boards</li>
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Unlimited Sprint Leaders</li>
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Slack Integration <span class="text-gray-300 text-xs p-1">Coming Soon</span></li>
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Teams Integration <span class="text-gray-300 text-xs p-1">Coming Soon</span></li>
            <li class="mb-3 flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2 text-green-500" /> Discord Integration <span class="text-gray-300 text-xs p-1">Coming Soon</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
    CheckCircleIcon,
    BanIcon,
} from '@heroicons/vue/solid'

export default {
  name: 'PricingView',
  components: {
    CheckCircleIcon,
    BanIcon,
  },
  setup() {
    return {}
  },
}
</script>
