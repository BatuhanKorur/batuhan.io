---
title: Creating Contact Form with Resend using Nuxt and Vue
description: Learn how to build a contact form with resend functionality using Nuxt.js and Vue.js in this detailed step-by-step tutorial. Enhance user experience and ensure reliable data submission with modern web technologies.
date: 2024-05-08T12:00:00.000Z
img: '/blog/001.svg'
tags: ['vue', 'nuxt', 'resend']
---

In this guide, we will walk through the process of building a contact form with [Nuxt & Vue](https://nuxt.com/), utilizing Resend.

<br>

[Resend](https://resend.com/) is a platform for email services that is tailored to improve communication efficiency and dependability. This tool is highly effective in addressing various email-related challenges that developers may encounter. We will be utilizing their straightforward interface to send emails from our Nuxt application through the Resend API.

<br>

In the contact form example we are working on, we will be developing an API that collects the form data and transmits it using the Resends API. This API is superior in terms of reliability and simplicity of setup when compared to alternatives such as `node-mailer`. It also makes sure that no message gets lost in your spam/junk folder and offers us a tool to monitor the email flow.

<br>

Plus, the free version includes 3,000 monthly transactional email which for many small businesses is enough for emails coming from a contact page.

---

## 1. Setting Things Up
Before we dive into code, create a Resend account and add your domain. After you verified your domain we need to create a API key which we will use in our Nuxt App.
You can learn how to add and [verify your domain](https://resend.com/docs/dashboard/domains/introduction), and [creating an API key](https://resend.com/docs/dashboard/api-keys/introduction) to use within our Nuxt App

<br>

Once everything is done, let's add resend package to our project
```zsh [Terminal]
yarn add resend
```
<br>

Lastly, add the Resend API Key to your `.env` file 
```sh [.env]
RESEND_API_KEY=spWhYrWV_yBriNqAW9otUo2PuV3fD_ebtUi9
```

---

## 2. Vue Contact Form Component
Now everything is ready, let's create a `ContactForm` component. Setup all the necessary inputs and their bindings that you require.

```vue [ContactForm.vue]
<script setup>
  const name = ref('')
  const email = ref('')
  const message = ref('')
  
  async function onSubmit(){
    // ...
  }
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="name" type="text" placeholder="Your Name" required>
    <input v-model="email" type="email" placeholder="Your Email" required>
    <textarea v-model="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send</button>
  </form>
</template>
```
---

## 3. Form Validation
Before proceeding with sending the email through our API, we should confirm whether the user has filled in their email and message. Here is a straightforward javascript RegExp function that can be used to validate the email. I have separated this code as `validation.email.js` and placed it in the `src/utils` directory

```js [utils/validate.email.js]
export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
}
```
<br>

Now we can use this function in our contact form to check if the user has entered a correctly formatted email
```vue [ContactForm.vue]
<script setup>
  //...
  async function onSubmit(){
    const emailValid = validateEmail(email.value)
    
    // While in the category of validations, let's also make sure the user will not send us an empty email
    const messageValid = message.value.length > 8
    
    if(emailValid && messageValid){
      // Make an API Call
    }
  }
</script>
```

---

## 4. Resend API Function
Everything seems to be setup. Let's create a `send.js` file in our `server/api` directory and start building our API function.
<br><br>
The resend package we implemented into our project now allows us to utilize the `emails.send` function for sending emails in a user-friendly manner. It's a straightforward and minimalist function that simply requires the addition of an object with the essential parameters
```js [server/api/send.js]
// Add resend module and create a new instance with our API Key
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

// Event Handler Function
export default defineEventHandler(async (event) => {
  // Here, the 'event' will be the object we will pass from ContactForm.vue, with all the relevant information
  const { name, mail, message } = await readyBody(event)
  
  try {
    await resend.emails.send({
      // We can use one of our emails as the sender
      from: 'batuhan.io <website@batuhan.io>',
      
      // The email we want to receive the message to
      to: 'mail@batuhan.io',
      
      // Let's add the users name and mail address as a subject
      subject: `Message from ${name} (${mail})`,
      
      // The message content
      html: message
    })
    // If the await if successfully, the function will return 'success: true'
    // Otherwise, it will fall into catch, and return the error object
    return {
      success: true
    }
  } catch (err) {
    return { err }
  }
})

```

---


## 5. Using our API in the Form
We built our API, now the only thing left is to use this API within our contact form.
```vue [ContactForm.vue]
<script setup>
  //...
  async function onSubmit(){
    const emailValid = validateEmail(email.value)
    const messageValid = message.value.length > 8
    
    if(emailValid && messageValid){
      await $fetch('/api/send', {
        
        // The need to stringify objects to JSON when sending it to an server API
        body: JSON.stringify({
          name: name.value,
          mail: email.value,
          message: message.value
        })
      }).then(() => {
        console.log('email sent!')
      })
    }
  }
</script>
```

---

## Done!
This is everything we need to do for using Resend email API with our Nuxt/Vue App.  Of course, there is a lot of other things we can do to improve the UX. Such as sending a feedback to the user about the error whether it's from the validation or from the API function we built. Feel free to improve towards you liking. 

<br>

If you have any suggestions or ideas for a better approach, don't hesitate to contact.

<br>

### Happy Coding ✌️
