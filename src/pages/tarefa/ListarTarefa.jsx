import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';

import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';

// Função para criar os dados iniciais
function createData(
  idTarefa: number,
  tituloTarefa: string,
  descricaoTarefa: string,
  inicioTarefa: string,
  fimTarefa: string,
  statusTarefa: string,
  recursoTarefa: string,
) {
  return { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa };
}

// Dados iniciais das tarefas
const initialRows = [
  createData(1, 'Tarefa 1', 'Descrição da Tarefa 1', '2022-01-01', '2022-01-02', 'Concluída', 'Recurso 1'),
  createData(2, 'Tarefa 2', 'Descrição da Tarefa 2', '2022-01-03', '2022-01-04', 'Em Andamento', 'Recurso 2'),
  createData(3, 'Tarefa 3', 'Descrição da Tarefa 3', '2022-01-04', '2022-01-05', 'Em Andamento', 'Recurso 3'),
  createData(4, 'Tarefa 4', 'Descrição da Tarefa 4', '2022-01-05', '2022-01-06', 'Em Andamento', 'Recurso 4'),
  createData(5, 'Tarefa 5', 'Descrição da Tarefa 5', '2022-01-06', '2022-01-07', 'Em Andamento', 'Recurso 5'),
  createData(6, 'Tarefa 6', 'Descrição da Tarefa 6', '2022-01-07', '2022-01-08', 'Aguardando', 'Recurso 6'),
];

// Componente ListarTarefa com Alto Contraste
const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState();
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  useEffect(() => {
    setTarefas(initialRows);
  },[]);

  const handleEditar = (id) => {
    setIdTarefaSelecionada(id);
    let tarefaParaEditar = tarefas.filter(obj => obj.idTarefa === id)[0];
    setTarefa(tarefaParaEditar);
    setOpenEditar(true);
  };

  const handleDeletar = (id) => {
    setTarefas(current => current.filter(tarefa => tarefa.idTarefa !== id));
  };

  return(
    <>
      <Card sx={{ backgroundColor: '#212121', color: 'white' }}>
        <CardHeader title="Tarefas" subheader="Listagem de Tarefas" sx={{ color: 'white' }} /> 
        <CardContent>
          <TableContainer component={Paper} sx={{ backgroundColor: '#424242' }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: 'white' }}>#</TableCell>
                  <TableCell sx={{ color: 'white' }}>Título</TableCell>
                  <TableCell align="right" sx={{ color: 'white' }}>Descrição</TableCell>
                  <TableCell align="right" sx={{ color: 'white' }}>Data de Início</TableCell>
                  <TableCell align="right" sx={{ color: 'white' }}>Data de Finalização</TableCell>
                  <TableCell align="right" sx={{ color: 'white' }}>Status</TableCell>
                  <TableCell align="right" sx={{ color: 'white' }}>Recurso</TableCell>
                  <TableCell align="left" sx={{ color: 'white' }}></TableCell>
                  <TableCell align="left" sx={{ color: 'white' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map((row, indice) => (
                  <TableRow key={indice}>
                    <TableCell sx={{ color: 'white' }}>{row.idTarefa}</TableCell>
                    <TableCell sx={{ color: 'white' }}>{row.tituloTarefa}</TableCell>
                    <TableCell align="right" sx={{ color: 'white' }}>{row.descricaoTarefa}</TableCell>
                    <TableCell align="right" sx={{ color: 'white' }}>{row.inicioTarefa}</TableCell>
                    <TableCell align="right" sx={{ color: 'white' }}>{row.fimTarefa}</TableCell>
                    <TableCell align="right" sx={{ color: 'white' }}>{row.statusTarefa}</TableCell>
                    <TableCell align="right" sx={{ color: 'white' }}>{row.recursoTarefa}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="success" onClick={() => handleEditar(row.idTarefa)}><EditIcon fontSize="small" /></Button>            
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="error" onClick={() => handleDeletar(row.idTarefa)}><DeleteIcon fontSize="small" /></Button>            
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary" onClick={handleOpen}>Criar Tarefa</Button>
          <Button size="small" variant="outlined" color="secondary">Cancelar</Button>
        </CardActions> 
      </Card>
      <Modal open={open} onClose={handleClose}>
        <div>
          <CriarTarefa handleClose={handleClose} tarefas={tarefas} setTarefas={setTarefas} />
        </div>
      </Modal>  
      <Modal open={openEditar} onClose={handleCloseEditar}>
        <div>
          <EditarTarefa handleCloseEditar={handleCloseEditar} idTarefaSelecionada={idTarefaSelecionada} tarefas={tarefas} tarefa={tarefa} setTarefas={setTarefas} />
        </div>
      </Modal>  
    </>
  );
};

export default ListarTarefa;
