// components/ForgotPasswordForm.js
'use client';
import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Modal,
  Container,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ForgotPasswordFormProps {
  open: boolean;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}

export default function ForgotPassword({
  open,
  onClose,
}: ForgotPasswordFormProps) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fakeServerToken = '123456'; // Simulated token
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
  const handleSendToken = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      if (!email || !email.includes('@')) {
        throw new Error('Insira um email válido.');
      }

      // Simulate API call
      await new Promise((res) => setTimeout(res, 1000));

      setMessage('O código de redefinição foi enviado.');
      setStep(2);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocorreu um erro inesperado.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      if (token !== fakeServerToken) {
        throw new Error('Invalid token.');
      }

      // Simulate API call
      await new Promise((res) => setTimeout(res, 1000));

      setMessage('Senha redefinida com sucesso!');
      setStep(1);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocorreu um erro inesperado.');
      }
    } finally {
      setLoading(false);
    }
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
          <Typography variant='h5' mb={2} color='Black' fontWeight='bold'>
            {step === 1 ? 'Esqueci a senha' : 'Redefinir senha'}
          </Typography>
          <IconButton onClick={(event) => onClose(event, 'backdropClick')}>
            <CloseIcon />
          </IconButton>
        </Box>
        {message && (
          <Alert severity='success' sx={{ mb: 2 }}>
            {message}
          </Alert>
        )}
        {error && (
          <Alert severity='error' sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {step === 1 && (
          <TextField
            label='Email'
            type='email'
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
        )}

        {step === 2 && (
          <>
            <TextField
              label='Código de Verificação'
              type='text'
              fullWidth
              required
              value={token}
              onChange={(e) => setToken(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label='Nova Senha'
              type='password'
              fullWidth
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
          </>
        )}

        <Button
          variant='contained'
          color='primary'
          fullWidth
          disabled={loading}
          startIcon={loading && <CircularProgress size={20} />}
          onClick={step === 1 ? handleSendToken : handleResetPassword}
          sx={{
            backgroundColor: '#F7931E',
            borderRadius: '30px',
            px: 5,
            py: 1.5,
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          {loading
            ? 'Aguarde...'
            : step === 1
            ? 'Enviar Código'
            : 'Redefinir Senha'}
        </Button>
      </Container>
    </Modal>
  );
}
