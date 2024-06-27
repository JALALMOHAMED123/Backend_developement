const express = require('express');
const fs=require('fs');
const router=express.Router();

router.get('/login', (req, res) => {
    res.send(`
        <html>
        <body>
            <form action="/" class="form" method="GET">
                <label for="username">User Name: </label>
                <input type="text" name="username" required>
                <button type="submit">Login</button>
            </form>
            <script>
                document.querySelector('form').addEventListener('submit', function(event){
                    event.preventDefault();
                    const username = event.target.username.value;
                    localStorage.setItem('username', username);
                    const user_name = document.createElement('input');
                    user_name.type = 'hidden';
                    user_name.name = 'username';
                    user_name.value = username;
                    this.appendChild(user_name);
                    this.submit();
                });
            </script>
        </body>
        </html>
    `);
});

router.get('/', (req, res) => {
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            data = '';
        }
        const msg = data.trim().split('\n').map(msg => `<p>${msg}</p>`).join('');
        
        res.send(`
            <html>
            <body>
                ${msg}
                <form action="/" method="POST" id="messageForm">
                    <input type="text" name="message" placeholder="Message">
                    <button type="submit">Send</button>
                </form>
                <script>
                    document.getElementById('messageForm').addEventListener('submit', function(event) {
                        event.preventDefault();
                        const username = localStorage.getItem('username');
                        const user_name = document.createElement('input');
                        user_name.type = 'hidden';
                        user_name.name = 'username';
                        user_name.value = username;
                        this.appendChild(user_name);
                        this.submit();
                    });
                </script>
            </body>
            </html>
        `);
    });
});

router.post('/', (req, res) => {
    const username = req.body.username;
    const message = req.body.message;

    const usermessage = `${username}: ${message}`;
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            data = '';
        }

        const newData = `${usermessage}\n${data}`;
    
        fs.writeFile('message.txt', newData, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.redirect('/');
        });
    });
});

module.exports = router;

