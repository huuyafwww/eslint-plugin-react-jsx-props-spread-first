import fs from 'fs';
import path from 'path';
import { CLIEngine } from 'eslint';
import { pluginId } from './plugin-id';
import { rules } from './rules';

const filePath = path.resolve(__dirname, '../../src/configs/recommended.ts');
const rawContent = `/* DON'T EDIT THIS FILE. This is generated by 'scripts/lib/update-lib-configs-recommended.ts' */

export = {
  plugins: ["${pluginId}"],
  rules: {
    ${rules
      .filter((rule) => rule.recommended)
      .map((rule) => `"${rule.id}": "error"`)
      .join(',\n    ')}
  },
};
`;
const engine = new CLIEngine({ fix: true });
const lintResult = engine.executeOnText(rawContent, filePath);
const content = lintResult.results[0].output || rawContent;

fs.writeFileSync(filePath, content);
