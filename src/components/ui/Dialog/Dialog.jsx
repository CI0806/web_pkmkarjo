import {
  Dialog as BaseDialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Box,
  Typography
} from '@mui/material';
import { HelpOutline } from '@mui/icons-material';

const Dialog = ({ open, onClose, title, message, actions }) => {
  return (
    <BaseDialog 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: { borderRadius: '16px', p: 1, width: '400px' }
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          {/* Ikon untuk mempermanis notifikasi */}
          <Box 
            sx={{ 
              bgcolor: 'primary.lighter', 
              p: 1, 
              borderRadius: '10px', 
              display: 'flex',
              color: 'primary.main' 
            }}
          >
            <HelpOutline />
          </Box>
          <Box>
            <Typography variant="h6" fontWeight="bold">{title}</Typography>
          </Box>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <DialogContentText sx={{ color: 'text.secondary' }}>
          {message}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        {actions?.map((item, idx) => (
          <Button 
            key={idx} 
            onClick={item.onClick}
            variant={item.variant || "text"} // Bisa kirim variant 'contained' untuk tombol utama
            color={item.color || "primary"}
            sx={{ borderRadius: '10px', px: 3 }}
          >
            {item.label}
          </Button>
        ))}
      </DialogActions>
    </BaseDialog>
  );
};

export default Dialog;