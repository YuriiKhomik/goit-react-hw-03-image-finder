import { GalleryItem, Image } from './styled';

export const ImageGalleryItem = ({ smallImage, largeImage }) => {
  return (
    <GalleryItem>
      <Image src={smallImage} />
    </GalleryItem>
  );
};
