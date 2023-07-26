import { IRenderEngine } from "../infrastructure/RenderEngine";

export class DialogueNode {

  render(renderEngine: IRenderEngine) {
    renderEngine.renderDialogueNode();
  }
}
