const Contact = {
    async render() {
        return `
        <section class="form-head">
        <div class="title-contact container-fluid">
            <h1>we'd like to hear from you</h1>
        </div>
    </section>
    <section class="wrap">
        <div class="form-wrap">
            <div>
                <p class="lead">Whether you're curious about services or ordered-we're ready to answer any and all
                    questions.</p>
            </div>
            <div>
                <form id="contact-form" method="post" action="">
                    <input name="name" type="text" class="form-control" placeholder="Kimi no na wa" requied><br>
                    <input name="email" type="email" class="form-control" placeholder="Email" requied><br>
                    <input name="subject" type="text" class="form-control" placeholder="Subject" requied><br>
                    <textarea name="message" class="form-control" placeholder="Message" rows="3" requied></textarea><br>
                    <input type="submit" class="form-control-button" value="Send Message">
                </form>
            </div>
        </div>
    </section>`;
    },
};

export default Contact;