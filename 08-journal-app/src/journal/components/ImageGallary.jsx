import {ImageList,ImageListItem} from '@mui/material';

export const ImageGallary = ({images=[]}) => {
  return (
    <ImageList sx={{ width: '100%', height: 400 }} cols={4} rowHeight={'auto'} className='animate__animated animate__fadeIn animate__faster'>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt='Imagen de una nota'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}