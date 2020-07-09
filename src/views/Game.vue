<template>
  <div
    class="hero-full-container background-image-container white-text-container background"
    style
    :style="{ 'background-image': `url(${require('@/assets/images/space.jpg')})` }"
  >
    <div class="game" style="padding: 1em 0 !important">
      <div style="height: 100%; text-align: center">
        <span>{{msg}}</span>

        <textarea v-model="value" type="text" class="form-control jsonText" readonly />

        <div style="display:flex; justify-content: space-between; align-items: center;">
          <span @click="resetGame()" style="padding: 1em">
            <i class="fa fa-refresh"></i>
          </span>
          <input
            ref="position"
            style="background:none !important;border-color: white;width: 20%; margin: 1em auto;text-align: center"
            class="form-control"
            placeholder="Place"
            v-model="position"
            @keypress="keyPress"
          />
          <span @click="placeChip(position)" style="padding: 1em">
            <i class="fa fa-paper-plane"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  data: () => ({
    msg: "",
    value: "",
    position: ""
  }),
  mounted() {
    this.resetGame();
  },
  methods: {
    newGame() {
      this._game = [];
      this._nextChipPlace = [];
      this.currentPlayer = "🔵";
      this.position = "";
      this.msg = "";
      for (let i = 0; i < 7; i++) {
        this._game.push([]);
        for (let j = 0; j < 7; j++) {
          this._game[i].push("⚪");
        }
        this._nextChipPlace[i] = 6;
      }
    },
    print() {
      let str = `----- 🎮 Player ${this.currentPlayer} -----\n`;
      str = str + "+--+--+--+--+--+--+--+--+\n";
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
          str = str + `|${this._game[i][j]}`;
        }
        str = str + "|\n+--+--+--+--+--+--+--+--+\n";
      }
      this.value = str;
    },
    resetPlaceInput() {
      this.position = "";
      this.$refs.position.focus();
    },
    placeChip(position) {
      if (position > 0 && position <= 7) {
        position = position - 1;
        if (this._game[this._nextChipPlace[position]]) {
          this._game[this._nextChipPlace[position]][
            position
          ] = this.currentPlayer;
          if (this.currentPlayer == "🔵") this.currentPlayer = "🔴";
          else this.currentPlayer = "🔵";
          this._nextChipPlace[position]--;
          this.print();
          this.resetPlaceInput();
          this.msg = "";
          this._checkWin(position);
        } else {
          this.print();
          this.msg = " ⚠️ Position is full! ⚠️ ";
          for (let i = 0; i < 7; i++) {
            if (this._game[i][0] == 0) break;
            else if (i == 6) {
              this.msg = "   💀 Game Over 💀   ";
              this.newGame();
            }
          }
        }
      } else {
        this.print();
        this.msg = "⚠️ Not valid position ⚠️";
      }
    },
    _checkWin(position) {
      // [verticalCount, horizontalCount, diagonalCountUD, diagonalCountDU]
      let player1 = [0, 0, 0, 0];
      // [verticalCount, horizontalCount, diagonalCountUD, diagonalCountDU]
      let player2 = [0, 0, 0, 0];

      for (let i = 0; i < 7; i++) {
        let lastInsertion = this._nextChipPlace[position] + 1;

        // HorizontalCheck
        if (
          i != 0 &&
          this._game[lastInsertion][i] != this._game[lastInsertion][i - 1]
        ) {
          player1[0] = 0;
          player2[0] = 0;
        }
        if (this._game[lastInsertion][i] == "🔵") player1[0]++;
        else if (this._game[lastInsertion][i] == "🔴") player2[0]++;

        if (player1[0] == 4) {
          this.resetGame();
          this.msg = "🎉🏆 Player 🔵 Win! 🏆🎉";
          break;
        } else if (player2[0] == 4) {
          this.resetGame();
          this.msg = "🎉🏆 Player 🔴 Win! 🏆🎉";
          break;
        }

        // VerticalCheck
        if (i != 0 && this._game[i][position] != this._game[i - 1][position]) {
          player1[1] = 0;
          player2[1] = 0;
        }
        if (this._game[i][position] == "🔵") player1[1]++;
        else if (this._game[i][position] == "🔴") player2[1]++;

        if (player1[1] == 4) {
          this.resetGame();
          this.msg = "🎉🏆 Player 🔵 Win! 🏆🎉";
          break;
        } else if (player2[1] == 4) {
          this.resetGame();
          this.msg = "🎉🏆 Player 🔴 Win! 🏆🎉";
          break;
        }

        // DiagonalCheckUD (U -> Up, D -> Down) -> \
        let diagonalPositionUD = position - lastInsertion + i;
        if (diagonalPositionUD >= 0 && diagonalPositionUD <= 6) {
          if (
            i != 0 &&
            this._game[i][diagonalPositionUD] !=
              this._game[i - 1][diagonalPositionUD - 1]
          ) {
            player1[2] = 0;
            player2[2] = 0;
          }
          if (this._game[i][diagonalPositionUD] == "🔵") player1[2]++;
          else if (this._game[i][diagonalPositionUD] == "🔴") player2[2]++;

          if (player1[2] == 4) {
            this.resetGame();
            this.msg = "🎉🏆 Player 🔵 Win! 🏆🎉";
            break;
          } else if (player2[2] == 4) {
            this.resetGame();
            this.msg = "🎉🏆 Player 🔴 Win! 🏆🎉";
            break;
          }
        }

        // DiagonalCheckDU (D -> Down, U -> Up ) -> /
        let diagonalPositionDU = position + lastInsertion - i;
        if (diagonalPositionDU >= 0 && diagonalPositionDU <= 6) {
          if (
            i != 0 &&
            this._game[i][diagonalPositionDU] !=
              this._game[i - 1][diagonalPositionDU + 1]
          ) {
            player1[3] = 0;
            player2[3] = 0;
          }
          if (this._game[i][diagonalPositionDU] == "🔵") player1[3]++;
          else if (this._game[i][diagonalPositionDU] == "🔴") player2[3]++;

          if (player1[3] == 4) {
            this.resetGame();
            this.msg = "🎉🏆 Player 🔵 Win! 🏆🎉";
            break;
          } else if (player2[3] == 4) {
            this.resetGame();
            this.msg = "🎉🏆 Player 🔴 Win! 🏆🎉";
            break;
          }
        }
      }
    },
    resetGame() {
      this.newGame();
      this.print();
    },
    keyPress(event) {
      if (event.which == 13) {
        this.placeChip(this.position);
        this.resetPlaceInput();
      }
    }
  }
};
</script>

<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
}
.game {
  color: white;
  border-color: white;
  position: fixed;
  background: black;
  border: solid 1px;
  border-color: white;
  width: 30em;
}
.game:hover {
  border-color: white;
  background: black;
}

.jsonText {
  height: 31em !important;
  width: 95%;
  resize: none;
  margin: 1em auto 0em;
  text-align: center;
}
</style>