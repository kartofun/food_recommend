'use strict';

const e = React.createElement;

async function getRecipe(){
  const response = await fetch("/recipes", {
    method: "GET",
    headers: {"Accept": "application/json"}
  });
  if (response.ok == true) {
    const recipe = await response.json();
    document.getElementById("recipe").value = recipe
  }
}


async function getUser(id) {
  const response = await fetch(`/api/users/${id}`, {
      method: "GET",
      headers: { "Accept": "application/json" }
  });
  if (response.ok === true) {
      const user = await response.json();
      document.getElementById("userId").value = user.id;
      document.getElementById("userName").value = user.name;
      document.getElementById("userAge").value = user.age;
  }
  else {
      // если произошла ошибка, получаем сообщение об ошибке
      const error = await response.json();
      console.log(error.message); // и выводим его на консоль
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'ЕДА';
    }

    return e(
      'button',
      {className: "likebutton", onClick: () => this.setState({ liked: true }) },
      componentDidMount()
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
