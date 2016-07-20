import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

//create the jsdom and attach it to the node global object
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

//attach all windows properties to the global object so that all dom properties are accessible
//without the window prefix.
Object.keys(window).forEach((key) => {
  if(!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);