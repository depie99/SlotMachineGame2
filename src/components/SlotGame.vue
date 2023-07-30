<template>
  <v-container fluid>
    <v-card-title class="d-flex text-center justify-center">
      WelCome To The Slot Game!
    </v-card-title>
    <v-divider/>
     <v-card-text>
       <v-row justify="center">
         <v-col cols="3" v-for="(block, index) in blocks" :key="index">
           <v-card class="slot-block" :class="{'spinning': spinning}">
             <v-row v-if="spinning" justify="center">
               <v-progress-circular indeterminate color="primary"></v-progress-circular>
             </v-row>
             <v-row v-else justify="center" align="center" class="slot-symbol">
               <v-icon v-if="block !== ''">{{ block }}</v-icon>
             </v-row>
           </v-card>
         </v-col>
       </v-row>
     </v-card-text>

     <v-card-text>
       <v-row justify="center" class="game-controls">
         <v-btn @click="startGame" color="success" class="mx-2"
                outlined :disabled="spinning">Start Game</v-btn>
         <v-btn @click="cashOut" color="red" class="mx-2"
                outlined :disabled="cashOutDisabled">CASH OUT</v-btn>
         <v-btn @click="resetGame" color="warning" class="mx-2"
                outlined >Reset</v-btn>
       </v-row>
     </v-card-text>
     <v-card-text>
       <v-row justify="center" class="credits">
         <span>Credits: {{ credits }}</span>
       </v-row>
     </v-card-text>
  </v-container>
</template>

<script>
export default {
  name: "SlotGame",
  data() {
    return {
      credits: 10,
      blocks: ['', '', ''],
      spinning: false,
      cashOutMoved: false,
      cashOutDisabled: false,
      symbols: ['cherry', 'lemon', 'orange', 'watermelon'],
      rewardMap: {
        'cherry': 10,
        'lemon': 20,
        'orange': 30,
        'watermelon': 40
      }
    };
  },
  methods: {
    startGame() {
      if (this.credits > 0 && !this.spinning) {
        if (this.credits >= 1) {
          this.credits -= 1;
          this.spinning = true;
          this.blocks = ['', '', ''];

          // Simulate spinning
          setTimeout(() => {
            this.spinBlock(0);
            setTimeout(() => {
              this.spinBlock(1);
              setTimeout(() => {
                this.spinBlock(2);
                const win = this.checkWin();
                this.updateCredits(win);
                this.spinning = false;
              }, 1000);
            }, 2000);
          }, 500);
        } else {
          alert('Insufficient credits!');
        }
      }
    },
    spinBlock(index) {
      const randomIndex = Math.floor(Math.random() * this.symbols.length);
      this.blocks[index] = this.symbols[randomIndex];
    },
    checkWin() {
      return this.blocks[0] === this.blocks[1] && this.blocks[1] === this.blocks[2];
    },
    updateCredits(win) {
      if (win) {
        const reward = this.rewardMap[this.blocks[0]];
        this.credits += reward;
      }
    },
    cashOut() {
      const chance = Math.random();
      if (chance < 0.5) {
        this.cashOutMoved = true;
      } else if (chance < 0.9) {
        this.cashOutDisabled = true;
      } else {
        this.credits = 0;
      }
    },
    resetGame() {
      this.credits = 10;
      this.blocks = ['', '', ''];
      this.spinning = false;
      this.cashOutMoved = false;
      this.cashOutDisabled = false;
    }
  },
}
</script>

<style scoped lang="css">
.slot-block {
  border-radius: 50%;
}
</style>