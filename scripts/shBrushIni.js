/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * Ini Brush
 * homepage:   http://avi-aryan.github.io
 * git repo:   http://github.com/avi-aryan/highlighter-ahk-zenburn
 *
 */

 SyntaxHighlighter.brushes.Ini = function()
{

this.regexList = [
{ regex: /\[.*?\]/gm, css: 'functions' },
{ regex: /^.*?\=/gm, css: 'variable' },
//{ regex: /\=.*?/gm, css: 'string' },
{ regex: /[^.];.*$/gm, css: 'comments'}
];

};


SyntaxHighlighter.brushes.Ini.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Ini.aliases = ['ini']; 
typeof(exports) != 'undefined' ? exports.SyntaxHighlighter.brushes.Ini = SyntaxHighlighter.brushes.Ini : null;