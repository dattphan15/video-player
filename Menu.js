import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // chooseVideo expects a string as an argument. But event handlers are automatically passed event objects, not strings. This handleClick function will equal the text of a clicked radio button.
  handleClick(e) {
    let text = e.target.value;
    this.props.chooseVideo(text);
  }

  render() {
    return (
      <form onClick={this.props.chooseVideo}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}
