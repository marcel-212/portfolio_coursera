const Contact = () => {
    return ( 
        <section>
            <h1>Contact Form</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value=""/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value=""/>

                <label htmlFor="reason">Type of enquiry</label>
                <select id="reason" name="reason">
                    <option>Job offer</option>
                    <option>Freelance project proposal</option>
                    <option>Other</option>
                </select>

                <label htmlFor="message">Your message</label>
                <textarea id="message" name="message" value=""/>

                <input type="submit" name="submit" value="Submit"/>
            </form>
        </section>
     );
}
 
export default Contact;