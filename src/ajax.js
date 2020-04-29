let  express = require('express');
let app = express();
let bodyParser = require('body-parser');

let visitors = [
{
    id: 1,
    name: 'john'
}]


let currentId = 1;

let PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/visitors', (req, res) => {
    res.send({ visitors: visitors });
});

app.post('/visitors', (req, res) => {
    let visitorName = req.body.name;
    currentId++;

    visitors.push({
        id: currentId,
        name: visitorName
    });

    res.send('Successfully view visitor');
});

app.put('/visitors/:id', (req, res) => {
    let id = req.params.id;
    let newName = req.body.newName;

    let found = false;

    visitors.forEach( (visitor, index) => {
        if (!found && visitor.id === Number(id)) {
            visitor.name = newName;
        }
    });

    res.send('Succesfully updated visitor!');
});

app.delete('/visitors/:id', (req, res) =>  {
    let id = req.params.id;

    let found = false;

    visitors.forEach( (visitor, index) => {
        if (!found && visitor.id === Number(id)) {
            visitors.splice(index, 1);
        }
    });

    res.send('Successfully deleted visitor');
});

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
});


































// 





//     $("submitButton").click(() => {
//         console.log("clicked")
        
//         $.ajax({
//             url: "single-page-app/",
//             type: "get",
//             dataType : "json",
//             success : (data) => {
//                 console.log("yes", data)
//                 $("#status").htnl("all visitors" + data)
//             }
//         })
// })
// })