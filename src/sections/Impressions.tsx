import { Container, Box, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';

const images = import.meta.glob('../assets/images/Impressions/*.jpeg', { eager: true });
const impressions = Object.values(images).map((mod: any) => mod.default);

export default function Impressions() {
  const theme = useTheme();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <Box id="impressions" sx={{ py: 10, backgroundColor: theme.palette.secondary.light, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {zoomedImage && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              bgcolor: 'rgba(0,0,0,0.85)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
            }}
            onClick={() => setZoomedImage(null)}
          >
            <Box
              component="img"
              src={zoomedImage}
              alt="Zoomed Impression"
              sx={{
                maxWidth: '90%',
                maxHeight: '90%',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            />
          </Box>
        )}

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop
          autoHeight
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {impressions.map((img, i) => (
            <SwiperSlide key={i}>
              <Box
                maxHeight={500}
                component="img"
                src={img}
                alt={`Bild ${i + 1}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: { xs: '70vh', md: '80vh' },
                  objectFit: 'contain',
                  display: 'block',
                  borderRadius: 2,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                  cursor: 'zoom-in',
                }}
                onClick={() => setZoomedImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
