<script setup lang="ts">
import { Button, Hr, Html, Text } from '@vue-email/components'

export default {
    props:{
        message:{
            type:Object
        }
    }
}
</script>

<template>
  <Html lang="en">
    <Text>{{ message.title }}</Text>
    <Hr />
    <Button href="https://example.com">Click me</Button>
  </Html>
</template>