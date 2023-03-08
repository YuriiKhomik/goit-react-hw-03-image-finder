import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery } from './styled';
// import { GalleryItem } from 'components/ImageGalleryItem/styled';

export const ImageGallery = ({ items }) => {
  return (
    <Gallery>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          smallImage={item.webformatURL}
          largeImage={item.largeImageURL}
        />
      ))}
    </Gallery>
  );
};
