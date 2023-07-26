import { describe, it, expect } from 'vitest';
import { DialogueNode } from '../../src/domain/DialogueNode';
import { IRenderEngine } from '../../src/infrastructure/RenderEngine';


const renderEngine = {
  renderDialogueNodeWasCalled: false,
  renderDialogueNode() {
    this.renderDialogueNodeWasCalled = true;
  },
};


describe('DialogueNode.render', () => {
  it('should call render function in RenderEngine', () => {
    // arrange
    const dialogueNode = new DialogueNode();

    // act
    dialogueNode.render(renderEngine)

    //assert
    expect(renderEngine.renderDialogueNodeWasCalled).toBe(true);
  });
});
