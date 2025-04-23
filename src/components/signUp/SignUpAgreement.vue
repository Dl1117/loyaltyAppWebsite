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
        class="w-10/12 mx-auto flex flex-col items-center justify-center rounded-lg bg-white py-2 px-4"
      >
        <h2 class="text-sm text-gray-800 mt-2 mb-4 helvetica">
          {{ SignUpFormLanguageCode['UserAgreement_' + props.selectedLanguageCode] }}
        </h2>

        <div class="flex flex-col space-y-1 w-full">
          <div class="flex flex-col space-y-2 w-full border-b border-gray-300 h-72 overflow-y-auto">
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement1_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement2_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement3_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement4_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement5_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement6_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement7_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement8_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement9_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement10_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement11_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement12_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement13_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['UserAgreement14_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica py-4">
              {{ SignUpFormLanguageCode['GamePlayAgreement_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['GamePlayAgreement1_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica py-4">
              {{ SignUpFormLanguageCode['GamePlayAgreement2_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['GamePlayAgreement3_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['GamePlayAgreement4_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['GamePlayAgreement5_' + props.selectedLanguageCode] }}
            </p>
            <p class="text-sm helvetica">
              {{ SignUpFormLanguageCode['GamePlayAgreement6_' + props.selectedLanguageCode] }}
            </p>
          </div>

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
