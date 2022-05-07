resumable file uploads with Tus protocol. 
1. uses `tus-node-server` - backend
2. uses `uppy.js` - frontend

start frontend -> in root directory
```python
python -m http.server 8001
```


start backend -> 
```bash
cd tusnodeserver 
node server.js 
```

goto localhost:8001 and enjoy

uploads  will be stored in `tusnoderserver/files`