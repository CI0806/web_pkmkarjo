import React from 'react';
import { 
  Drawer, Box, Typography, IconButton, Stack, Divider, Button 
} from '@mui/material';
import { Close, Save } from '@mui/icons-material';

const FormDrawer = ({ open, onClose, title, children, onSave, loading, showFooter = true }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { 
          width: { xs: '100%', sm: 600 }, 
          borderRadius: '16px 0 0 16px' 
        }
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2, px: 3 }}>
          <Typography variant="h6" fontWeight="700">{title}</Typography>
          <IconButton onClick={onClose} edge="end"><Close /></IconButton>
        </Stack>
        <Divider />

        {/* Content Area (Scrollable) */}
        <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto' }}>
          {children}
        </Box>

        {/* Footer Action */}
        {showFooter && (
          <>
            <Divider />
            <Stack direction="row" spacing={2} sx={{ p: 3 }}>
              <Button 
                variant="outlined" 
                fullWidth 
                onClick={onClose} 
                disabled={loading}
                sx={{ 
                  color: '#6b7280', 
                  borderColor: '#e5e7eb',
                  '&:hover': { borderColor: '#089191', color: '#089191' }
                }}
              >
                Batal
              </Button>
              <Button 
                variant="contained" 
                fullWidth 
                startIcon={<Save />} 
                onClick={onSave} 
                disabled={loading}
                sx={{ 
                  backgroundColor: '#089191',
                  '&:hover': { backgroundColor: '#0f766e' }
                }}
              >
                {loading ? "Menyimpan..." : "Simpan Data"}
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default FormDrawer;