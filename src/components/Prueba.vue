<!-- <template>
    <div class="prueba">
        <h1 v-if="isVisible">{{ message }}</h1> 
        <h1 v-bind:class="{ highlighted: isHighlighted }">{{ title }}</h1>
        <!-- <button @click="toggleVisibility">Toggle Visibility</button>
        <button v-on:click="toggleHighlight">Toggle Highlight</button>
        <input v-model="message">
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.text }}</li>
        </ul>
    </div>
</template> 

<script>
export default {
    name: 'Prueba',
    data() {
        return {
            message: 'Hello World!',
            title: 'Prueba',
            isHighlighted: false,
            isVisible: true,
            list: [
                { id: 1, text: 'Item 1' },
                { id: 2, text: 'Item 2' },
                { id: 3, text: 'Item 3' }
            ]
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible
        },
        sayHello() {
            alert('Hello World!')
        },
        toggleHighlight() {
            this.isHighlighted = !this.isHighlighted
        }
    }
}
</script>

<style>
.highlighted {
    color: gold;
}
</style> -->