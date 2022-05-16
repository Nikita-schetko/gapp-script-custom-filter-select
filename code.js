function doGet(request) {
  var html = HtmlService.createTemplateFromFile('index');
  var evaluated = html.evaluate();
  evaluated.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return evaluated
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}