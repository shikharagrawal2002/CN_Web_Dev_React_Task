const ContactPage = () => {
    return  (
    <div className="contactpage">
        <div className = "text">
            <h1>CONTACT US</h1>
        </div>
        <div className="body">
            <p>For Suggestions and Queries reach out to us.</p>
            <form>
                <label>
                    <span className="visually-hidden">Name</span>
                </label>
                <input placeholder="Name"/>
                <label>
                    <span className="visually-hidden">Registration Number</span>
                </label>
                <input placeholder="Registration Number"/>
            </form>
        </div>
    </div>
    );
};

export default ContactPage;