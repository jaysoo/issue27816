import { describe, beforeEach, it, expect } from 'vitest';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { fooGenerator } from './generator';
import { FooGeneratorSchema } from './schema';

describe('foo generator', () => {
  let tree: Tree;
  const options: FooGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await fooGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
