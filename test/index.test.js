const postcss = require('postcss');
const fs = require('fs');
const path = require('path');
const plugin = require('..');

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

function readFile(name) {
  return fs.readFileSync(path.resolve(__dirname, name), 'utf8');
}

function getFixtures(fixture) {
  return {
    source: readFile(`fixtures/${fixture}.css`),
    expected: readFile(`fixtures/${fixture}.expected.css`),
  };
}

test('strip header comment', async () => {
  const res = getFixtures('header-comment');
  await run(res.source, res.expected, {});
});

test('strip inline comment', async () => {
  const res = getFixtures('inline-comment');
  await run(res.source, res.expected, {});
});

test('strip no comment', async () => {
  const res = getFixtures('no-comment');
  await run(res.source, res.expected, {});
});
