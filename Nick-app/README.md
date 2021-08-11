# Nick-app

---

## This is the Nick-app

To start this app (on a linux based environment), follow the process below:

```
git clone https://github.com/flashiam/Nick-app.git
source venv/bin/activate
```

#### Frontend:

```
cd react-app
npm install
npm start
```

#### Backend:

```
cd bots
python manage.py makemigrations && python manage.py migrate && python manage.py runserver
```
