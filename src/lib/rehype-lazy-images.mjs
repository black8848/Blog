export function rehypeLazyImages() {
  return (tree) => {
    visit(tree);
  };
}

function visit(node) {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'element' && node.tagName === 'img') {
    node.properties ??= {};
    node.properties.loading ??= 'lazy';
    node.properties.decoding ??= 'async';
  }
  for (const child of node.children ?? []) visit(child);
}
