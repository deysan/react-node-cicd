const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactApp = require('../src/app').default;

const app = express();

app.get(/\.(js|css|html)$/, express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  const html = fs.readFileSync(
    path.resolve(__dirname, '../dist/index.html'),
    'utf-8'
  );

  const reactApp = ReactDOMServer.renderToString(<ReactApp />);
  const finalHtml = html.replace(
    '<div id="app"></div>',
    `<div id="app">${reactApp}</div>`
  );

  res.contentType('html');
  res.status(200);
  res.send(finalHtml);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
