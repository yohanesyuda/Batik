const Contact = {
    async render() {
        return `
        <section class="form-head">
        <div class="title-contact container-fluid">
            <h1 tabindex="0">we'd like to hear from you</h1>
        </div>
    </section>
    <section class="wrap">
        <div class="form-wrap">
            <div>
                <p tabindex="0" class="lead">Whether you're curious about services or ordered-we're ready to answer any and all
                    questions.</p>
            </div>
            <div>
                <form id="contact-form">
                    <input name="name" type="text" class="form-control" placeholder="Kimi no na wa" requied><br>
                    <input name="email" type="email" class="form-control" placeholder="Email" requied><br>
                    <input name="subject" type="text" class="form-control" placeholder="Subject" requied><br>
                    <textarea name="message" class="form-control" placeholder="Message" rows="3" requied></textarea><br>
                    <button tabindex="0" type="submit" class="form-control-button">Send Message</button>
                </form>
            </div>
        </div>
    </section>`;
    },
    async afterRender() {
    const contactForm = document.querySelector('#contact-form');
    const inputs = contactForm.querySelectorAll('input');
    const textArea = contactForm.querySelector('textarea');
    contactForm.addEventListener('submit', function(event){
        event.preventDefault()
        inputs.forEach(input => {
            input.value = ''
        })
        textArea.value = ''
    })
      },
};

export default Contact;