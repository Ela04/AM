git config --global user.email "ga.antunez@duocuc.cl"
git config --global user.name "Ela04"
git add .
git commit -m "comentario"
git branch
git checkout estudiante
git add .
git commit -m "comentario"
git checkout main
git merge estudiante
git push u- origin estudiante
git push
git pull

------------------
componente: pequeño trozo reutilizable
modulo: contiene todo lo necesario
*guardian: metodo de seguridad
estado: guarda temporalmente info para enviar
inyeccion: importa lo necesario
*persistencia de datos: datos duplicados?