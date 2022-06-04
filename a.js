const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello, world!</h1>);
function tick(){
    const ele=<div>
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
    root.render(ele)
}
setInterval(tick,100)