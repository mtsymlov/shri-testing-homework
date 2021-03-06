function parseFileTreeItem(line) {
  const [info, path] = line.split('\t');
  const [, type, hash] = info.split(' ');

  return { type, hash, path };
}

function parseHistoryItem(line) {
  const [hash, author, timestamp, msg] = line.split('\t');

  return { hash, author, timestamp, msg };
}

const normalizeData = cbMap => data => data.split('\n').filter(Boolean).map(cbMap);

module.exports = {
  parseFileTreeItem,
  parseHistoryItem,
  normalizeData
};
