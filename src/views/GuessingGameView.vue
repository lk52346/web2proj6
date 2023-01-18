<template>
    <h1>Guessing Game (number between 1 and 10)</h1>
    <h2 v-if="isGameOver" class="congrats">Congratulations</h2>
    <button @click="restartGame">Restart game</button>
    <div>Number of guesses: {{ numberOfGuesses }}</div>
    <ul class="all-guesses">
        <li v-for="guess in guesses" :key="guess" :class="guessClass(guess, number)">Your guess: {{ guess }} </li>
    </ul>
    <input class="guess" type="text" ref="myGuess" @keyup.enter="addGuess" placeholder="Enter a number..." />
    <button v-on:click="addGuess">Guess</button>
</template>

<script>
    export default{
        data(){
            return{
                guesses: [],
                number: Math.floor(Math.random()*10)+1,
                numberOfGuesses: 0,
                highScore: 0
            }
        },
        methods: {
            guessClass(guess, number) {
                if(guess>number)
                    return "high"
                if(guess<number)
                    return "low"
                if(guess==number)
                    return "correct"
            },
            addGuess(){
                if(this.$refs.myGuess.value.trim()=='' || this.isGameOver)
                    return
                this.guesses.push(this.$refs.myGuess.value)
                this.$refs.myGuess.value = ''
                this.numberOfGuesses++;
            },
            restartGame(){
                this.guesses = []
                this.numberOfGuesses = 0
                this.number = Math.floor(Math.random()*10)+1
            }
        },
        computed:{
            isGameOver: function(){
                return this.guesses.length>0 && this.guesses.slice(-1)==this.number
            }
        }
    }
</script>

<style scoped>
    .high::after{
        content: '👇';
    }

    .low::after{
        content: '☝';
    }

    .correct::after{
        content: '✅';
    }
    .all-guesses{
        min-height: 400px;
        background-color: grey;
        color: black;
        padding-top: 20px;
    }
    .congrats{
        color: green;
    }

    .guess{
        margin: 10px;
    }
</style>