'use strict';

const e = React.createElement;

async function getRecipe(){
  const response = await fetch("/recipes", {
    method: "GET",
    headers: {"Accept": "application/json"}
  });
  if (response.ok == true) {
    const recipe = await response.json();
    // document.getElementById("message").value = recipe
    return recipe
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      // return getRecipe();
      return 'test_food'
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
