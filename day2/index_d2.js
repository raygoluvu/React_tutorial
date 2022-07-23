
const pagetitle = (
    <div>
        <img src="./tea.png" width="80px"></img>
        <h1>~ Profile Page ~</h1>
    </div>
)
const pageContent = (
    <ul>
        <li>first text line.</li>
        <li>second text line.</li>
        <li>third text line.</li>
    </ul>
)
const root = document.getElementById('title');
const content = document.getElementById('content')
ReactDOM.render(pagetitle, root)
ReactDOM.render(pageContent, content)