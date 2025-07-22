const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(_dirname));

app.get('/', (req,res) => {
    res.sendFile('index.html', {root:_dirname});
});

app.get('/user', (req, res)=>{
    res.sendFile('user.html',{root:_dirname});
});

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));

