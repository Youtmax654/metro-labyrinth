import * as EVENTS from "./events";
import { Game, GamePhase } from "./objects";

const GameContainer = document.querySelector("#labyrinth") as HTMLDivElement;
let width = GameContainer.clientWidth;

let game = new Game(window);

window.addEventListener("resize", function () {
  game.camera.perspective.aspect = width / window.innerHeight;
  game.camera.perspective.updateProjectionMatrix();
  game.renderer.setSize(width, window.innerHeight);
  game.renderer.render(game.scene, game.camera.perspective);
});

document.addEventListener("keydown", function (event) {
  switch (game.phase) {
    case GamePhase.SELECT_LANE:
      EVENTS.selectLane(event, game);
      break;
    case GamePhase.MOVE_LANE:
      EVENTS.moveLane(event, game);
      break;
  }
});

GameContainer.addEventListener("click", (event) =>
  EVENTS.movePlayer(event, game)
);

function render() {
  requestAnimationFrame(render);
  game.render();
}
render();

let understoodButton = document.getElementById("understoodButton");
let main = document.getElementsByTagName("main")[0];
let howToPlayPopup = document.getElementById("howToPlay-popup");

understoodButton?.addEventListener("click", () => {
  howToPlayPopup?.classList.remove("fadeFromTopOpacity");
  howToPlayPopup?.classList.add("fadeFromBottomOpacity");
  main.classList.remove("darken");
});
