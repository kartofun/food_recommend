'use strict';
const recipe = "test_food"
const e = React.createElement;

// async function getRecipe(){
//   const response = await fetch("/recipes", {
//     method: "GET",
//     headers: {"Accept": "application/json"}
//   });
//   const recipe = await response.json();
//   window.alert(recipe.json())
//   if (response.ok == true) {
//     const recipe = await response.json();
//     console.log(recipe)
//     // document.getElementById("likebutton").value = recipe
//     return recipe
//     // return recipe
//   }
// }

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return recipe
      // return recipe
      // return 'test_food'
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
