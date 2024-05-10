---
title: How to use YAML with Vue & Vite
description: In this blog post, we will explore how to efficiently use YAML data within a Vue.js application.
date: 2024-05-10T18:30:30.000Z
img: '/blog/002.svg'
tags: [ 'vue', 'vite', 'yaml' ]
---

In modern web development, YAML (YAML Ain't Markup Language) is widely used for configuration files and data storage due
to its human-readable format. Vue.js, a progressive JavaScript framework, is often chosen for its reactivity and
component-based architecture.

<br>

In this blog post, we will explore how to efficiently use YAML data within a Vue.js
application. This can be especially useful in scenarios where configuration or structured data is required.

<br>
<br>

## Installing Required Packages

Firstly, a YAML parser is required as browsers are unable to directly parse YAML. We will
utilize [@modyfi/vite-plugin-yaml](https://github.com/Modyfi/vite-plugin-yaml),
a well-known JavaScript library, for this task. After incorporating this plugin into our vite configuration, we will be
able to use YAML files as JavaScript objects across our project

<br> 

```bash [Terminal]
# NPM
npm install -D @modyfi/vite-plugin-yaml

# Yarn
yarn add @modyfi/vite-plugin-yaml

# Pnpm
pnpm i -D @modyfi/vite-plugin-yaml
```

<br>
<br>

## Add Yaml Plugin to Vite
```js [vite.config.js]
import ViteYaml from '@modyfi/vite-plugin-yaml'

export default defineConfig({
  plugins: [
    ViteYaml()
    // ...
  ]
})
```
<br>

Vite handles everything else. Now, we can create our yaml files in our project directory and start utilizing them.

<br>

My usual practice involves using YAML files to define constants that are used consistently throughout the app and don't
require frequent updates. Another useful scenario is generating fake data to mimic an API response, enabling you to
develop the front-end to mirror an API object without needing to make the actual API call

<br>
<br>

## Create your YAML files
For testing purposes, let's make a sample YAML file. I usually store these files in the `src/data` folder. Arrange your
project in a way that works best for you

```yaml [user.yaml]
user:
  name: John
  email: johndoe@example.com
  favorites_books:
    - id: 100
      name: 'Lord of the Rings'
      author: 'J.R.R Tolkien'
    - id: 101
      name: 'Do Androids Dream of Electric Sheep'
      author: 'Philip K. Dick'
```

<br>
<br>

## Loading and Parsing YAML Data
All you need to do is include the YAML file in your Vue component, and its contents will be converted to a JavaScript
object

```vue [App.vue]
<script setup lang="ts">
	import data from '@/data/user.yaml'

	const user = data.user
</script>
<template>
	<div>
		<p>{{ user.name}}</p>
		<p>{{ user.email}}</p>
	</div>
</template>
```
<br>

We set an array of objects in our YAML file. We can use them just like any other array of objects data.

```vue [App.vue]

<script setup lang="ts">
	import data from '@/data/user.yaml'

	const user = data.user
</script>
<template>
	<div v-for="book in user.favorite_books">
		<p>{{ book.name }}</p>
		<p>{{ book.author }}</p>
	</div>
</template>
```

<br>
<br>

## Done

The fusion of YAML data with Vue.js presents a variety of potentials, such as controlling app settings or importing
external data in a clear and organized manner. By following the steps detailed above, you can effectively introduce YAML
into your Vue projects

<br>

### Happy Coding ✌️

<br>
