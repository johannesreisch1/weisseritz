import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Masterarbeit von Johannes Reisch
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Im Auftrag der TU Dresden
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Johannes Reisch, Sebnitzer Str. 27, 01099 Dresden
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <Link href="mailto:johannes.reisch@mailbox.tu-dresden.de" underline="hover">
          johannes.reisch@mailbox.tu-dresden.de
        </Link>
      </Typography>
    </Box>
  );
}
