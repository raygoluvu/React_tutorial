
const root = document.getElementById('root')
ReactDOM.render(<div className="list-group">
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Heading</h5>
            <small>small</small>
        </div>
        <p className="mb-1">Paragraph</p>
        <small>paragraph footer</small>
    </a>
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Heading</h5>
            <small>small</small>
        </div>
        <p className="mb-1">Paragraph</p>
        <small>paragraph footer</small>
    </a>
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start disabled">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Heading</h5>
            <small>small</small>
        </div>
        <p className="mb-1">Paragraph</p>
        <small>paragraph footer</small>
    </a>
</div>, root)


// for challenge 2
function Navbar() {
    return (
        <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
            <a classNameName="navbar-brand" href="#">Navbar</a>
            <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span classNameName="navbar-toggler-icon"></span>
            </button>

            <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
                <ul classNameName="navbar-nav mr-auto">
                    <li classNameName="nav-item active">
                        <a classNameName="nav-link" href="#">Home <span classNameName="sr-only">(current)</span></a>
                    </li>
                    <li classNameName="nav-item">
                        <a classNameName="nav-link" href="#">Link</a>
                    </li>
                    <li classNameName="nav-item dropdown">
                        <a classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a classNameName="dropdown-item" href="#">Action</a>
                            <a classNameName="dropdown-item" href="#">Another action</a>
                            <div classNameName="dropdown-divider"></div>
                            <a classNameName="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li classNameName="nav-item">
                        <a classNameName="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form classNameName="form-inline my-2 my-lg-0">
                    <input classNameName="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById('root2')
)

const newh1 = document.createElement("h1")
newh1.textContent = "I'm learning React! Using vanilla js."
newh1.classNameName = 'header'
document.getElementById('root3').append(newh1)

// challenge 4
const navbar = (
    <nav>
        <h1>Pudding's Website!</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById('root4'))

const hone = (
    <h1>this is h1</h1>
)
const honev = document.createElement("h1")
honev.textContent = 'this is hi, too';
console.log(hone)
console.log(honev)