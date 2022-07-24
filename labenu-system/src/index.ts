import app from "./app";
import { criarTurma } from "./endpoints/Criar/CriarTurma";
import { criarEstudante } from "./endpoints/Criar/CriarEstudante";
import { criarDocente } from "./endpoints/Criar/CriarDocente";
import { BuscarTurmasAtivas } from "./endpoints/Buscar/BuscarTurmasAtivas";
import { BuscarTodasAsTurmas } from "./endpoints/Buscar/BuscarTodasAsTurmas";
import { BuscarAlunos } from "./endpoints/Buscar/BuscarAlunos";
import { BuscarDocentes } from "./endpoints/Buscar/BuscarDocentes";
import { MudarTurmaModulo } from "./endpoints/Mudar/MudarTurmaModulo";
import { MudarAlunoTurma } from "./endpoints/Mudar/MudarAlunoTurma";
import { MudarDocenteTurma } from "./endpoints/Mudar/MudarDocenteTurma";

app.post('/turma/', criarTurma)
app.post("/estudante/", criarEstudante)
app.post("/docente/", criarDocente)

app.get('/turma/ativa', BuscarTurmasAtivas)
app.get('/turma/', BuscarTodasAsTurmas)
app.get('/estudante/', BuscarAlunos)
app.get('/docente/', BuscarDocentes)

app.put('/turma/:nome', MudarTurmaModulo)
app.put('/estudante/', MudarAlunoTurma)
app.put('/docente/', MudarDocenteTurma)
