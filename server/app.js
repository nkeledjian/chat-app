const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8989 });

const users = [];

// ws = web server
const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data));
        }   
    })
}

// web socket server connection
wss.on('connection', (ws) => {
    let index;
    // listens for ADD_USER or ADD_MESSAGE events
    ws.on('message', (message) => {
        const data = JSON.parse(message)
        switch (data.type) {
            case 'ADD_USER': {
                index = users.length;
                users.push({ name: data.name, id: index + 1});
                ws.send(JSON.stringify({
                    type: 'USERS_LIST',
                    users
                }))
                broadcast({
                    type: 'USERS_LIST',
                    users
                }, ws)
                break
            }
            case 'ADD_MESSAGE':
                broadcast({
                    type: 'ADD_MESSAGE',
                    message: data.message,
                    author: data.author
                }, ws)
                break
            default:
                break
        }
    })
    // web socket close connection
    ws.on('close', () => {
        users.splice(index, 1)
        broadcast({
            type: 'USERS_LIST',
            users
        }, ws)
    })
});
