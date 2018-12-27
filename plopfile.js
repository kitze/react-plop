module.exports = function(plop) {
  /* Helpers */
  plop.addHelper('upperCase', function(text) {
    return text.toUpperCase();
  });

  var files = {
    index: 'plop-templates/index.js',
    indexConnected: 'plop-templates/index-connected.js',
    styles: 'plop-templates/styles.js',
    dialog: {
      index: 'plop-templates/Dialog/index.js',
      style: 'plop-templates/Dialog/styles.js'
    }
  };

  /* Files */
  var createIndex = {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/index.js',
    templateFile: files.index
  };

  /* Files */

  var createView = {
    type: 'add',
    path: 'src/views/{{pascalCase name}}/index.js',
    templateFile: files.index
  };

  var createDialog = {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/index.js',
    templateFile: files.dialog.index
  };

  var createDialogStyle = {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/styles.js',
    templateFile: files.dialog.style
  };

  var createStyle = {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/styles.js',
    templateFile: files.styles
  };

  var createViewStyle = {
    type: 'add',
    path: 'src/views/{{pascalCase name}}/styles.js',
    templateFile: files.styles
  };

  /* Questions */
  var getComponentName = {
    type: 'input',
    name: 'name',
    message: 'What is the component name?',
    validate: function(value) {
      if (/.+/.test(value)) {
        return true;
      }
      return 'name is required';
    }
  };

  /* Options */
  plop.setGenerator('component', {
    description: 'Component',
    prompts: [getComponentName],
    actions: [createIndex, createStyle]
  });

  plop.setGenerator('view', {
    description: 'View',
    prompts: [getComponentName],
    actions: [createView, createViewStyle]
  });

  plop.setGenerator('dialog', {
    description: 'Dialog',
    prompts: [getComponentName],
    actions: [createDialog, createDialogStyle]
  });
};
