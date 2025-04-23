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
      root: 'border-none max-w-xl',
      mask: 'bg-black/50',
    }"
    @update:visible="(value) => !value && handleClose()"
  >
    <template #container="">
      <div
        class="w-9/12 mx-auto flex flex-col items-center justify-center rounded-lg bg-white py-2 px-4"
      >
        <h2 class="text-sm text-gray-800 mb-4 helvetica">
          {{ SignUpFormLanguageCode['Reminder_' + props.selectedLanguageCode] }}
        </h2>

        <div class="space-y-2 w-full">
          <!-- UID Rules -->
          <div class="text-gray-700">
            <p class="mb-2 text-sm helvetica">
              {{ SignUpFormLanguageCode['Reminder1_' + props.selectedLanguageCode] }}
            </p>
          </div>

          <!-- Password Rules -->
          <div class="text-gray-700">
            <p class="text-sm mb-2 helvetica">
              {{ SignUpFormLanguageCode['Reminder2_' + props.selectedLanguageCode] }}
            </p>
          </div>

          <div class="flex w-full border-t border-gray-300">
            <!-- UID Examples -->
            <div
              class="w-1/2 border-r border-gray-300 pr-2 text-sm flex flex-col items-center pt-3"
            >
              <p class="font-medium text-custom-grey-8 helvetica">UID:</p>
              <p class="flex font-medium text-custom-grey-8 helvetica">
                abcd12 <img :src="TickIcon" alt="tick" class="w-3 h-3 mt-1" />
              </p>
              <p class="flex font-medium text-custom-grey-8 helvetica">
                ab123a <img :src="TickIcon" alt="tick" class="w-3 h-3 mt-1" />
              </p>
              <p class="flex font-medium text-custom-grey-8 helvetica">
                123abc <img :src="XIcon" alt="X" class="w-3 h-3 mt-1" />
              </p>
              <p class="flex font-medium text-custom-grey-8 helvetica">
                abcdef <img :src="XIcon" alt="X" class="w-3 h-3 mt-1" />
              </p>
            </div>

            <!-- Password Examples -->
            <div class="w-1/2 pl-2 text-sm flex flex-col gap-1 items-center pt-3">
              <p class="text-center font-medium text-custom-grey-8 helvetica">
                {{ SignUpFormLanguageCode['Password_' + props.selectedLanguageCode] }}:
              </p>
              <p class="flex font-medium text-custom-grey-8 helvetica">
                a12345 <img :src="TickIcon" alt="tick" class="w-3 h-3 mt-1" />
              </p>
              <p class="flex font-medium text-custom-grey-8 helvetica">
                123456 <img :src="XIcon" alt="X" class="w-3 h-3 mt-1" />
              </p>
              <p class="flex font-medium text-custom-grey-8 helvetica">
                abcdef <img :src="XIcon" alt="X" class="w-3 h-3 mt-1" />
              </p>
            </div>
          </div>

          <div class="w-full border-t border-gray-300"></div>

          <!-- OK Button -->
          <button
            @click="handleClose"
            class="w-full py-2 text-center text-custom-blue-1 rounded-md font-medium helvetica"
          >
            {{ SignUpFormLanguageCode['OK_' + props.selectedLanguageCode] }}
          </button>
        </div>
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
