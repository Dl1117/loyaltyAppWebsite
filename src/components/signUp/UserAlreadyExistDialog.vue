<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import { SignUpFormLanguageCode } from './switchLanguageList'
import { TickIcon, XIcon } from '@/assets/icons'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  selectedLanguageCode: {
    type: String,
    default: 'EN',
  },
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <Dialog
    :visible="visible"
    lazy
    :modal="true"
    :closable="false"
    :draggable="false"
    :pt="{
      root: 'border-none w-full max-w-xl',
      mask: 'bg-black/50',
    }"
    @update:visible="(value) => !value && handleClose()"
  >
    <template #container="">
      <div
        class="w-10/12 mx-auto flex flex-col items-center justify-center rounded-lg bg-white py-2"
      >
        <h2 class="text-sm text-gray-800 mt-2 mb-4 helvetica py-5">
          {{ SignUpFormLanguageCode['UserAlreadyExist_' + props.selectedLanguageCode] }}
        </h2>
        <button
          @click="handleClose"
          class="w-full py-2 text-center text-custom-blue-1 rounded-md font-medium helvetica border-t border-gray-200"
        >
          {{ SignUpFormLanguageCode['Confirm_' + props.selectedLanguageCode] }}
        </button>
      </div>
    </template>
  </Dialog>
</template>

<style scoped>
.roboto {
  font-family: 'Roboto', 'normal';
}

.helvetica {
  font-family: 'Helvetica Neue', 'normal' !important;
}
</style>
