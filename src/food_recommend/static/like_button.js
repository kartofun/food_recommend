'use strict';
// const recipe = "test_food"
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
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    if (this.state.liked) {
      // const element = new Date().toLocaleTimeString();
      const element = this.state.date.toLocaleTimeString();
      // const response = await fetch("/recipes", {
      //   method: "GET",
      //   headers: {"Accept": "application/json"}
      // });
      // const recipe = await respoinse.json();
      return element
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
