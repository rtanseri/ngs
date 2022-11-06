const setContent = function(title, content) {
    return {
      title: title,
      content: content
    }
  }
  console.log(setContent('Hello', 'World!'))
  
  const setContentES6 = (title, content) => ({title: title, content: content})
  console.log(setContentES6('Hello', 'ES6'))