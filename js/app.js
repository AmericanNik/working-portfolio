$(document).ready(function(){
  console.log("ready")

  let texts = ['Sequelize','HTML','Javascript','SQL', 'MongoDB', 'CSS', 'Node.js', 'Materialize', 'Bootstrap', 'JQuery', 'Firebase', 'CRUD Applications', 'Mongoose','Web Development','MERN Stack','API Development','MySQL','Express'];
  let lastTextIndex = 0;

  function fadeOutElement(element) {
      return new Promise((res) => element.fadeOut(1400, res));
  }

  function fadeInElement(element) {
      return new Promise((res) => element.fadeIn(1400, res));
  }

  function randomText() {
      let index = Math.floor(Math.random() * texts.length);
      if (index == lastTextIndex) return randomText();

      lastTextIndex = index;
      return texts[index];
  }

  async function animateText() {
      let textEl = $('#text');
      let text = await randomText();

      await fadeOutElement(textEl);
      textEl.text(text);
      await fadeInElement(textEl);
      animateText();
  }

     animateText();

});
