import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    let proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  }, []);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    console.log(`id: ${idTarefa} \n titulo: ${tituloTarefa} \n descrição: ${descricaoTarefa} \n inicio: ${inicioTarefa} \n fim: ${fimTarefa} \n recurso: ${recursoTarefa} \n status: ${statusTarefa}`);

    setTarefas(
      [...tarefas,
        {
          idTarefa,
          tituloTarefa,
          descricaoTarefa,
          inicioTarefa,
          fimTarefa,
          recursoTarefa,
          statusTarefa
        }
      ]);
    handleClose();
  };

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Tarefas"
          subheader="Cadastro de Tarefas"
          sx={{
            color: '#fff', // Texto branco
            backgroundColor: '#333', // Fundo escuro
          }}
        />
        <CardContent sx={{
          width: '95%',
          maxWidth: '100%',
          backgroundColor: '#222', // Fundo mais escuro para o conteúdo
          color: '#fff', // Texto branco
        }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="tarefa_titulo"
                aria-describedby="tarefa_titulo_helper_text"
                value={tituloTarefa}
                onChange={e => { setTituloTarefa(e.target.value) }}
                sx={{
                  color: '#fff', // Texto branco
                  borderColor: '#fff', // Cor da borda
                }}
              />
              <FormHelperText id="tarefa_titulo_helper_text" sx={{ color: '#fff' }}>Título da Tarefa.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="tarefa_descricao"
                aria-describedby="tarefa_descricao_helper_text"
                value={descricaoTarefa}
                onChange={e => { setDescricaoTarefa(e.target.value) }}
                sx={{
                  color: '#fff', // Texto branco
                  borderColor: '#fff', // Cor da borda
                }}
              />
              <FormHelperText id="tarefa_descricao_helper_text" sx={{ color: '#fff' }}>Descrição da Tarefa.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={3}>
              <FormControl>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  aria-describedby="tarefa_inicio_helper_text"
                  value={inicioTarefa}
                  onChange={e => { setInicioTarefa(e.target.value) }}
                  sx={{
                    color: '#fff', // Texto branco
                    fontWeight: 400,
                    borderColor: '#fff',
                  }}
                />
                <FormHelperText id="tarefa_inicio_helper_text" sx={{ color: '#fff' }}>Início da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl>
                <Input
                  id="tarefa_fim"
                  type="date"
                  aria-describedby="tarefa_fim_helper_text"
                  value={fimTarefa}
                  onChange={e => { setFimTarefa(e.target.value) }}
                  sx={{
                    color: '#fff', // Texto branco
                    fontWeight: 400,
                    borderColor: '#fff',
                  }}
                />
                <FormHelperText id="tarefa_fim_helper_text" sx={{ color: '#fff' }}>Fim da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso" sx={{ color: '#fff' }}>Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  label="Recurso"
                  onChange={handleRecurso}
                  size="small"
                  sx={{
                    color: '#fff', // Texto branco
                    fontWeight: 400,
                    backgroundColor: '#444', // Cor de fundo escura
                  }}
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_status" sx={{ color: '#fff' }}>Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  label="Status"
                  onChange={handleStatus}
                  size="small"
                  sx={{
                    color: '#fff', // Texto branco
                    fontWeight: 400,
                    backgroundColor: '#444', // Cor de fundo escura
                  }}
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container spacing={2} pl={2} mt={2}>
              <Grid item xs={1}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleSalvar}
                  sx={{
                    backgroundColor: '#ff6600', // Laranja para contraste
                    color: '#fff', // Texto branco
                  }}
                >
                  Salvar
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={handleClose}
                  sx={{
                    borderColor: '#ff6600', // Borda laranja
                    color: '#ff6600', // Texto laranja
                  }}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default CriarTarefa;
