import "./Contact.css";

function Contact(){

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
    };

    return (
        <div className="contact-container">
            <div className="contact-card">
                <h2>Contact Us</h2>

                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your Name"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email "/>
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows="5" placeholder="Enter your message"/>
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;