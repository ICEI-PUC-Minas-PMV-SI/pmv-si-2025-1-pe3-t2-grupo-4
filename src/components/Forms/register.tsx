import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  IconButton,
  Modal,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import styles from '../../app/page.module.css';

interface RegisterProps {
  open: boolean;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}

export default function Register({ open, onClose }: RegisterProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
    if (error) {
      setError('');
    }
  };

  const handleSubmit = () => {
    if (
      !formData.nome ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError('Preencha todos os campos');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Insira um e-mail válido');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    // Aqui você pode adicionar a lógica de registro
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Container maxWidth='xs' sx={modalStyle}>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          mb={3}
        >
          <Typography variant='h5' fontWeight='bold' color='Black'>
            Cadastro
          </Typography>
          <IconButton onClick={(event) => onClose(event, 'backdropClick')}>
            <CloseIcon />
          </IconButton>
        </Box>
        {error && <Alert severity='error'>{error}</Alert>}
        <Box display='flex' flexDirection='column' gap={2}>
          <TextField
            name='nome'
            label='Nome'
            variant='outlined'
            fullWidth
            className={styles.customOutlinedField}
            onChange={handleChange}
          />
          <TextField
            className={styles.customOutlinedField}
            name='email'
            label='E-mail'
            variant='outlined'
            fullWidth
            onChange={handleChange}
          />
          <TextField
            className={styles.customOutlinedField}
            name='password'
            label='Senha'
            type='password'
            variant='outlined'
            fullWidth
            onChange={handleChange}
          />
          <TextField
            className={styles.customOutlinedField}
            name='confirmPassword'
            label='Confirmar senha'
            type='password'
            variant='outlined'
            fullWidth
            onChange={handleChange}
          />
        </Box>

        <Box mt={4} display='flex' justifyContent='center'>
          <Button
            onClick={handleSubmit}
            variant='contained'
            sx={{
              backgroundColor: '#F7931E',
              borderRadius: '30px',
              px: 5,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            Cadastrar
          </Button>
        </Box>
      </Container>
    </Modal>
  );
}
