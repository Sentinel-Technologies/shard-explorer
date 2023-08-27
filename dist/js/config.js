const ExplorerConfig = {
  nodeURL: 'http://shard-node.duckdns.org:6969/',
  ticker: 'SHRD',
  blockReward: 2048,
  blockTime: 300,
  maxSupply: 21000000000,
  decimalPoints: 18
}

fetch('http://shard-node.duckdns.org:6969/stats')
  .then(response => response.json())
  .then(data => {
    ExplorerConfig.blockReward = data.chain.blockReward;
    console.log(ExplorerConfig.blockReward);
  });


