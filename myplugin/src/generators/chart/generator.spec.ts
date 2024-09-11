import { describe, it, beforeEach, expect } from 'vitest';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { joinPathFragments, Tree, readProjectConfiguration } from '@nx/devkit';

import { chartGenerator } from './generator';
import { ChartGeneratorSchema } from './schema';

describe('chart generator', () => {
  let tree: Tree;
  const options: ChartGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await chartGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
    expect(tree.exists(joinPathFragments(config.root, 'src/index.ts'))).toBeTruthy();
    expect(tree.exists(joinPathFragments(config.root, 'vite.config.ts'))).toBeTruthy();
  });
});
