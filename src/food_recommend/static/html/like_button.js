// import styles from '../css/styles.css'
// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Huyaik'
//     );
//   }
// }

// const domContainer = document.querySelector('#like_button_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));

import React from "react";
import styled from "styled-components";

const Button = styled.button{
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

const RoundedButton = (props) => {
  const handleClick = () => {
    alert("hello");
  };

  return <Button onClick={handleClick} {...props} />;
};

export default RoundedButton;