import React, { Component } from "react";

class Thumb extends Component {
  state = {
    loading: false,
    thumb: undefined
  };

  componentDidMount() {
    this.setState({ loading: true }, this.getThumb);
  }

  getThumb = () => {
    let reader = new FileReader();
    reader.onloadend = () =>
      this.setState({ loading: false, thumb: reader.result });
    reader.readAsDataURL(this.props.file);
  };

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }

    if (loading) {
      return <p>در حال بارگذاری...</p>;
    }

    return <img src={thumb} alt={file.name} />;
  }
}

export default Thumb;
