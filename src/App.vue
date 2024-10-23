<template>
  <div class="p-4">
    <section class="bg-gray-100 p-4 mb-4">
      <div class="mb-4">
        <label
          class="block mb-2"
          for="duration"
        >
          Visit Duration
        </label>
        <select
          class="w-[300px] bg-white p-2 border rounded-lg"
          placeholder="Select"
        >
          <option value="15">
            15 Min
          </option>
          <option value="30">
            30 Min
          </option>
          <option value="45">
            45 Min
          </option>
          <option value="60">
            60 Min
          </option>
          <option value="90">
            90 Min
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label
          class="block mb-2"
          for="booking"
        >
          No. of Booking / Session
        </label>
        <input
          class="w-[300px] bg-white p-2 border rounded-lg"
          type="number"
        >
      </div>
      <div class="flex items-center">
        <input
          type="checkbox"
          class="mr-2"
        >
        <label for="">
          Allow video tour call
        </label>
      </div>
    </section>
    <section class="border-2 p-4 rounded-lg mb-4">
      <h1 class="text-lg text-gray-600">
        Availability
      </h1>
      <p class="text-gray-600">
        Set your weekly recurring schedule
      </p>
      <div
        v-for="day in days"
        :key="day.label"
        class="days"
      >
        <div class="flex border-b p-4 pl-0 items-center">
          <input type="checkbox">
          <div class="pl-4 w-[60px]">
            {{ day.label }}
          </div>
          <div v-if="day.isAvailable">
            <Select class="border p-2 w-[160px] rounded">
              <option
                v-for="time in startTime"
                :key="time.label"
                class="time"
              >
                {{ time.label }}
              </option>
            </Select>
          </div>
          <div v-else>
            <span class="text-gray-500">
              Unavailable
            </span>
          </div>
          <div
            v-if="day.isAvailable"
            class="pl-2 pr-2"
          >
            -
          </div>
          <div v-if="day.isAvailable">
            <Select class="border p-2 w-[160px] rounded">
              <option
                v-for="time in finishTime"
                :key="time.label"
                class="time"
              >
                {{ time.label }}
              </option>
            </Select>
          </div>
          <div />
        </div>
      </div>
    </section>
    <section>
      <ScheduleXCalendar :calendar-app="calendarApp" />
    </section>
  </div>
</template>

<script setup>
import {
  createCalendar,
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar';
import '@schedule-x/theme-default/dist/index.css';
import { ScheduleXCalendar } from '@schedule-x/vue';

const calendarApp = createCalendar({
  selectedDate: '2024-10-23',
  views: [
    createViewDay(),
    createViewWeek(),
    createViewMonthGrid(),
    createViewMonthAgenda(),
  ],
  events: [],
});

const days = [
  {
    label: 'Mon',
    isAvailable: true,
  },
  {
    label: 'Tue',
    isAvailable: true,
  },
  {
    label: 'Wed',
    isAvailable: true,
  },
  {
    label: 'Thu',
    isAvailable: true,
  },
  {
    label: 'Fri',
    isAvailable: true,
  },
  {
    label: 'Sat',
    isAvailable: false,
  },
  {
    label: 'Sun',
    isAvailable: false,
  }
];

const startTime = [
{
    label: '7:00 am',
    value: '07:00',
  },
  {
    label: '8:00 am',
    value: '08:00',
  },
  {
    label: '9:00 am',
    value: '09:00',
  },
  {
    label: '10:00 am',
    value: '10:00',
  },
  {
    label: '11:00 am',
    value: '11:00',
  },
  {
    label: '12:00 pm',
    value: '12:00',
  },
  {
    label: '01:00 pm',
    value: '13:00',
  },
  {
    label: '02:00 pm',
    value: '14:00',
  },
  {
    label: '03:00 pm',
    value: '15:00',
  },
  {
    label: '04:00 pm',
    value: '16:00',
  },
  {
    label: '05:00 pm',
    value: '17:00',
  },
  {
    label: '06:00 pm',
    value: '18:00',
  },
  {
    label: '07:00 pm',
    value: '19:00',
  },
];

const finishTime = [
  {
    label: '8:00 am',
    value: '08:00',
  },
  {
    label: '9:00 am',
    value: '09:00',
  },
  {
    label: '10:00 am',
    value: '10:00',
  },
  {
    label: '11:00 am',
    value: '11:00',
  },
  {
    label: '12:00 pm',
    value: '12:00',
  },
  {
    label: '01:00 pm',
    value: '13:00',
  },
  {
    label: '02:00 pm',
    value: '14:00',
  },
  {
    label: '03:00 pm',
    value: '15:00',
  },
  {
    label: '04:00 pm',
    value: '16:00',
  },
  {
    label: '05:00 pm',
    value: '17:00',
  },
  {
    label: '06:00 pm',
    value: '18:00',
  },
  {
    label: '07:00 pm',
    value: '19:00',
  },
  {
    label: '08:00 pm',
    value: '20:00',
  },
];
</script>

<style>
  .sx__week-grid__hour:first-child,
  .sx__week-grid__hour:nth-child(2),
  .sx__week-grid__hour:nth-child(3),
  .sx__week-grid__hour:nth-child(4),
  .sx__week-grid__hour:nth-child(5),
  .sx__week-grid__hour:nth-child(6),
  .sx__week-grid__hour:nth-child(22),
  .sx__week-grid__hour:nth-child(23),
  .sx__week-grid__hour:nth-child(24)
  {
    display: none;
  }

  .sx__week-grid__hour:nth-child(7) {
    position: relative;
    top: -10px;
  }

  .sx__week-grid {
    height: 1000px;
  }

  .sx__calendar {
    border-color: #e5e7eb;
    border-width: 2px;
  }

  .days:last-child div {
    border: none;
  }
</style>
