document.addEventListener('DOMContentLoaded', function() {
/**
 * Renders a suite of performance tips
 */
function renderSuite(suite) {
  var ul = document.createElement('ul');
  var iter = 1;
  for (var tipName in suite) {
    // Add each tip to a list of tips.
    var tip = suite[tipName];
    var li = document.createElement('li');
    var html = '<a onclick="loadTip(\'{TIPNAME}\');" href="#">' +
        'Tip #{TIPNUM}: {TIPNAME}' +
        '</a>';
    html = html.replace('{TIPNUM}', iter++)
               .replace(/{TIPNAME}/g, tipName);
    li.innerHTML = html;
    ul.appendChild(li);
  }
  var list = document.querySelector('#list');
  list.appendChild(ul);
}

renderSuite(suite);
});

var converter = new Attacklab.showdown.converter();

var suite = {
  "Prerender if possible": {
    testId: "agt1YS1wcm9maWxlcnINCxIEVGVzdBiDqJQHDA",
    docUrl: 'tips/prerender.md'
  },
  "Avoid floating point coordinates": {
    testId: "agt1YS1wcm9maWxlcnINCxIEVGVzdBiRk-kDDA",
    docUrl: 'tips/integer-coords.md'
  },
  "Use the right canvas clearing technique": {
    testId: "agt1YS1wcm9maWxlcnINCxIEVGVzdBjL3ZAGDA",
    docUrl: 'tips/clear.md'
  },
  "Use requestAnimationFrame": {
    testId: "agt1YS1wcm9maWxlcnINCxIEVGVzdBiesKQHDA",
    docUrl: 'tips/integer-coords.md'
  },
  "Use canvas fragments": {
    testId: "agt1YS1wcm9maWxlcnINCxIEVGVzdBikj54HDA",
    docUrl: 'tips/prerender.md'
  },
  "Pack as many segments before a stroke as possible": {
    testId: "agt1YS1wcm9maWxlcnINCxIEVGVzdBjKva4HDA",
    docUrl: 'tips/clear.md'
  },
  "Avoid shadowBlur": {
    testId: "agt1YS1wcm9maWxlcnINCxIEVGVzdBiQqZcHDA",
    docUrl: 'tips/prerender.md'
  },
  "How you iterate over imageData matters": {
    testId: "agt1YS1wcm9maWxlcnINCxIEVGVzdBiH5P4FDA",
    docUrl: 'tips/prerender.md'
  }
};

function loadTip(tipName) {
  var tip = suite[tipName];
  // Load the chart
  chart = new Chart(tip.testId);
  chart.render('graph');
  // Load the description
  $.get(tip.docUrl, function(data) {
    var description = document.querySelector('#description');
    description.innerHTML = converter.makeHtml(data);
  });
}
