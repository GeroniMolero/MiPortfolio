// src/components/Contact.jsx
// ... (import React)
const Contact = () => {

return(
    <section id="contact" className="section">
        <h2>Contacto</h2>
        <p>Si estás interesado en colaborar o simplemente quieres charlar, ¡no dudes en contactarme!</p>
        <div className="contact-info">
            <p>Email: <a href="mailto:gemordz@gmail.com">gemordz@gmail.com</a></p>
            <p>Teléfono: <a href="tel:+34697872589">(34) 697 872 589</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ger%C3%B3nimo-molero-60a350368/" target="_blank" rel="noopener noreferrer">Gerónimo Molero</a></p>
        </div>
    </section>
)
}
export default Contact;