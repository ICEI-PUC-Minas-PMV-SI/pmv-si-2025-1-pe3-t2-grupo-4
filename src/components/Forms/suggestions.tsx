import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  IconButton,
  Modal,
  Alert,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import styles from '../../app/page.module.css';

interface SuggestionsProps {
  open: boolean;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}

export default function Suggestions({ open, onClose }: SuggestionsProps) {
  const [formData, setFormData] = useState({
    book_name: '',
    author: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

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
    if (error || success) {
      setSuccess('');
      setError('');
    }
  };

  const mockApiCall = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!formData.book_name || !formData.author) {
        setError('Preencha todos os campos');
        return;
      }
      const data = await mockApiCall();
      const response = await data;
      //Faça a chamada para a API real aqui
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocorreu um erro inesperado.');
      }
    } finally {
      setLoading(false);
      setFormData({ book_name: '', author: '' });
    }
    setSuccess('Sugestão enviada com sucesso!');
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
            Envie sua sugestão
          </Typography>
          <IconButton onClick={(event) => onClose(event, 'escapeKeyDown')}>
            <CloseIcon />
          </IconButton>
        </Box>
        {error && <Alert severity='error'>{error}</Alert>}
        {success && <Alert severity='success'>{success}</Alert>}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            fullWidth
            label='Nome do livro'
            name='book_name'
            value={formData.book_name}
            onChange={handleChange}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Autor'
            name='author'
            value={formData.author}
            onChange={handleChange}
            margin='normal'
          />
          <Button
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
            onClick={handleSubmit}
            variant='contained'
            sx={{
              backgroundColor: '#F7931E',
              borderRadius: '30px',
              px: 5,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              alignSelf: 'center',
            }}
          >
            Enviar
          </Button>
        </Box>
      </Container>
    </Modal>
  );
}
