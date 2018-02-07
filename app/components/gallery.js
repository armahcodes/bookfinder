import react, {Comment, Component} from 'react';

class Gallery extends Component {
  render(){
    let alternate = 'http://architecturebulletin.com.au/wp-content/themes/architectbulletin/images/book_ic_black.png';
    return (
      <div>
      {
        this.props.items.map((item, index) => {
          let {title, imageLinks, infoLink} = item.volumeInfo;
          return (
            <a
            key={index}
            className="book"
            href={infoLink}
            target="_blank"
            >
            <img
            src={imageLinks!== undefined ? image.Links.thumbnai : alternate}
            alt="book image"
            className="book-img"
            />

            <div className="book-text">
              {title}
              </div>
            </a>
          )
        })
      }
      </div>
    )
  }
}

export default Gallery;
