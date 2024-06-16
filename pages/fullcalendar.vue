<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

// 定義點擊事件處理函數
const handleDateClick = function (arg) {
  alert('date click! ' + arg.dateStr)
}

// 定義日曆選項
const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  dateClick: handleDateClick,
  events: [
    { title: 'event 1', date: '2024-06-17' },
    { title: 'event 2', date: '2024-06-18' }
  ]
})
</script>
<template>
  <FullCalendar :options="calendarOptions"/>
</template>