import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  IconButton,
  Modal,
  Link,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import styles from '../../app/page.module.css';

interface RegisterProps {
  open: boolean;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}

export default function Login({ open, onClose }: RegisterProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '32px',
    boxShadow: 24,
    py: 4,
    backgroundColor: '#FFEEDA',
    borderRadius: 8,
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password || !emailRegex.test(email)) {
      setError('Insira um e-mail e senha válidos');
      return;
    }

    // Aqui você pode adicionar a lógica de autenticação
  };
  const handleForgotPassword = () => {};

  return (
    <Modal open={open} onClose={onClose}>
      <Container maxWidth='xs' sx={modalStyle}>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          mb={3}
        >
          <Typography variant='h5' textAlign='center' color='Black'>
            Login
          </Typography>
          <IconButton onClick={(event) => onClose(event, 'backdropClick')}>
            <CloseIcon />
          </IconButton>
        </Box>
        {error && <Alert severity='error'>{error}</Alert>}

        <Box display='flex' flexDirection='column' gap={2}>
          <TextField
            className={styles.customOutlinedField}
            name='email'
            label='E-mail'
            variant='outlined'
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
          />
          <TextField
            name='senha'
            label='senha'
            variant='outlined'
            fullWidth
            type='password'
            className={styles.customOutlinedField}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError('');
            }}
          />
          <Link
            component='button'
            variant='body2'
            onClick={handleForgotPassword}
            underline='hover'
          >
            Forgot password?
          </Link>

          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleLogin}
            sx={{
              backgroundColor: '#F7931E',
              borderRadius: '30px',
              px: 5,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Modal>
  );
}
