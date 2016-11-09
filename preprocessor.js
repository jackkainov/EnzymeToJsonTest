const tsc = require('typescript');

module.exports = {
  process(src, path) {
    if (path.endsWith('.js')) {
      const compiled = tsc.transpile(
        src,
        {
          module: tsc.ModuleKind.CommonJS,
          jsx: tsc.JsxEmit.React
        },
        path,
        null
      );
      return compiled;
    }
    return src;
  }
};
