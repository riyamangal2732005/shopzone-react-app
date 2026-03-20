import styles from "./Contact.module.css";

function Contact(){

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
    };

    return (
        <div className={styles['contactContainer']}>
            <div className={styles['contactCard']}>
                <h2>Contact Us</h2>

                <form onSubmit={handleSubmit}>
                    <div className={styles['formGroup']}>
                        <label>Name</label>
                        <input type="text" placeholder="Enter your Name"/>
                    </div>

                    <div className={styles['formGroup']}>
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email "/>
                    </div>

                    <div className={styles['formGroup']}>
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