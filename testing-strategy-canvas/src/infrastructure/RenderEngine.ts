export interface IRenderEngine {
  renderDialogueNode();
}

export class RenderEngine implements IRenderEngine {
  renderDialogueNode() {
    throw new Error("Method not implemented.");
  }
}
