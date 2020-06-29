module.exports = getSettings

function getSettings(qs) {
  const graphSettings = getAvailableGraphs(qs); 
  const pathFinderSettings = getAvailablePathfinders(qs); 

  return {
    graphSettings,
    pathFinderSettings
  };
}


function getAvailableGraphs(qs) {
  let graphs = [
  {
    value: 'hangzhou-roads',
    name: '杭州 (7.6 MB)'
  }, 
  {
    value: 'amsterdam-roads',
    name: '阿姆斯特丹 (1.1 MB)'
  }, 
  {
    value: 'seattle-roads',
    name: '西雅图 (2.4 MB)'
  }, 
  {
    value: 'rome-roads',
    name: '罗马 (3.8 MB)'
  }, 
  {
    value: 'delhi-roads',
    name: '新德里 (3.9 MB)'
  }, 
  {
    value: 'moscow-roads',
    name: '莫斯科 (6.5 MB)'
  }, 
  // static文件夹里没有纽约的地图文件
  // { 
  //   value: 'USA-road-d.NY',
  //   name: 'New York (730K edges, 7.6 MB)'
  // },
  // Commenting this out, as on mobile devices it may crash the browser.
   {
    value: 'tokyo-roads',
    name: '东京 (12.3 MB)'
  }
];

  return {
    selected: qs.get('graph'),
    graphs
  };
}

function getAvailablePathfinders(qs) {
  return {
    selected: qs.get('finder') || 'nba',
    algorithms: [{
      value: 'a-greedy-star',
      name: 'Greedy A* (suboptimal)'
    }, {
      value: 'nba',
      name: 'NBA*'
    }, {
      value: 'astar-uni',
      name: 'Unidirectional A*'
    }, {
      value: 'dijkstra',
      name: 'Dijkstra'
    }]
  };
}