'use strict';
// const recipe = "test_food"
const e = React.createElement;

async function getRecipe(){
  const response = await fetch("/recipes", {
    method: "GET",
    headers: {"Accept": "application/json"}
  });
  const recipe = await response.json();
  window.alert(recipe.json())
  if (response.ok == true) {
    const recipe = await response.json();
    // document.getElementById("likebutton").value = recipe
    return recipe
    // return recipe
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      recipe: "null",
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("/recipes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            recipe: result.data
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    if (this.state.liked) {
      const { error, isLoaded, items } = this.state;
    if (error) {
      return "error";
    } else if (!isLoaded) {
      return "Загрузка...";
    } else {
      const url = "https://google.com";
      return "ddd"
    }
  }
    return e(
      'button',
      {className: "likebutton", onClick: () => this.setState({ liked: true }) },
      'clickme'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
