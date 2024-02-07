import * as EVENTS from "./events";
import { Game, GamePhase } from "./objects";

const canvas = document.getElementById("labyrinth") as HTMLCanvasElement;
let width = canvas.clientWidth;

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

canvas.addEventListener("click", (event) => EVENTS.movePlayer(event, game));

function render() {
  requestAnimationFrame(render);
  game.render();
}
render();

let returnButton = document.getElementById("return") as HTMLButtonElement;
