<script setup>
import { computed } from 'vue'
import V2LoadingIcon from '../loading/V2LoadingIcon.vue'

const props = defineProps({
  // Button text
  text: {
    type: String,
    default: '',
  },
  // Button styling
  width: {
    type: String,
    default: 'w-full',
  },
  height: {
    type: String,
    default: 'h-12',
  },
  textSize: {
    type: String,
    default: 'text-2xl',
  },
  textColor: {
    type: String,
    default: 'text-custom-blue-2',
  },
  // States
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  // Additional classes
  additionalClasses: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])

const handleClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
  }
}

const buttonClasses = computed(() => {
  return [
    'rounded-full',
    'relative',
    props.width,
    props.height,
    props.additionalClasses,
    { 'opacity-50 cursor-not-allowed': props.disabled || props.loading },
  ]
})
</script>

<template>
  <button :class="buttonClasses" :disabled="disabled || loading" @click="handleClick">
    <!-- Regular Text -->
    <span v-if="!loading" :class="[textSize, textColor, 'font-semibold']">
      {{ text }}
    </span>

    <!-- Loading Spinner -->

    <V2LoadingIcon v-else :textColor="textColor" />
  </button>
</template>
