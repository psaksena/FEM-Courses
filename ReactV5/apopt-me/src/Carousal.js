import React from "react";

class Carousal extends React.Component {
  state = {
    active: 0,
    photos: []
  };

  static getDerivedStateFromProps({ media }) {
    console.log(media);
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  clickHandler = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            return (
              <img
                key={photo}
                src={photo}
                data-index={index}
                onClick={this.clickHandler}
                className={index === active ? "active" : ""}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousal;
