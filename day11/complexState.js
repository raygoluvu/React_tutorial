function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(
            preContact => {
                return {
                    ...preContact,
                    isFavorite: !preContact.isFavorite
                }
            }
        )
    }

    let starIcon = contact.isFavorite ? "star.png" : "star-empty.png"

    return (
        <main>
            <article className="card">
                <img src={`../images/cat1.jpg`} className="card--image" />
                <div className="card--info">
                    <img
                        src={`../images/${starIcon}`}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <div>
        < App />
    </div>
)