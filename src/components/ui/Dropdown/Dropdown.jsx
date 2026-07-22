import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';

const Dropdown = ({ options = [], icon, trigger }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Jika ada 'trigger' (seperti Button di Navbar), pakai trigger. 
          Jika tidak, pakai IconButton standar dengan icon. */}
      {trigger ? (
        <div onClick={handleClick}>{trigger}</div>
      ) : (
        <IconButton onClick={handleClick}>{icon}</IconButton>
      )}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose} // PERBAIKAN: Gunakan onClose, bukan close
        onClick={handleClose} // Menutup menu saat area menu diklik (opsional)
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1.5,
            minWidth: 180,
            borderRadius: '12px',
            boxShadow: '0px 10px 25px rgba(0,0,0,0.1)',
            border: '1px solid',
            borderColor: 'divider',
            '& .MuiMenuItem-root': {
              px: 2,
              py: 1,
              fontSize: '0.9rem',
              gap: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.04)',
              },
            },
          },
        }}
      >
        {options.map((option, index) => {
          // Kita ekstrak properti agar tidak bocor ke MenuItem
          const { label, onClick, icon: optionIcon, sx: customSx } = option;

          return (
            <MenuItem
              key={index}
              sx={{ ...customSx }}
              onClick={() => {
                if (onClick) onClick();
                handleClose();
              }}
            >
              {optionIcon && (
                <ListItemIcon sx={{ minWidth: 'auto !important' }}>
                  {optionIcon}
                </ListItemIcon>
              )}
              <ListItemText>{label}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default Dropdown;