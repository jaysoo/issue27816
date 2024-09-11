import {
  getProjects,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { libraryGenerator } from '@nx/js';
import { ChartGeneratorSchema } from './schema';

export async function chartGenerator(
  tree: Tree,
  options: ChartGeneratorSchema
) {
  await libraryGenerator(tree, {
    name: options.name,
    directory: `libs/${options.name}`,
    projectNameAndRootFormat: 'as-provided',
  });

  const project = getProjects(tree).get(options.name);

  generateFiles(tree, path.join(__dirname, 'files'), project.root, options);

  await formatFiles(tree);
}

export default chartGenerator;
