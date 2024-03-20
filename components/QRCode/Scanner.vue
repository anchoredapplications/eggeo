<script setup lang="ts">
import { QrcodeStream } from 'vue-qrcode-reader';
const config = useRuntimeConfig()

const onDetect = (value: Array<any>) => {
    const url = value?.[0]?.rawValue
    const navUrl = url.split(config.public.url)
    if (navUrl.length >= 2) {
        useRouter().push(navUrl[navUrl.length - 1])
    }
}
</script>

<template>
    <div class="max-h-screen flex align-center justify-center">
        <QrcodeStream @detect="onDetect" class="w-full max-w-screen-sm aspect-square shadow-xl border-2 border-black"/>
        <QRCodeOutline class="absolute w-full max-w-screen-sm aspect-square"/>
    </div>
</template>