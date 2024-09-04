import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ce1231ac-4477-4640-869d-ae9fdc1bcc4a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success(
        "Gracias por contactarnos, trataremos de responderte a la brevedad"
      );
      setIsSubmitted(true); // Deshabilita el botón después de enviar
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contáctanos</h2>
        <form onSubmit={onSubmit} method="POST" className="space-y-8">
          <div>
            <label htmlFor="subject" className="form__label">
              Nombre:
            </label>
            <input
              type="text"
              id="subject"
              name="name"
              placeholder="Tu nombre."
              className="form__input mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="form__label">
              Tu Mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@gmail.com"
              className="form__input mt-1"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Tu mensaje:
            </label>
            <textarea
              rows="6"
              name="message"
              id="message"
              placeholder="Dejanos un comentario."
              className="form__input mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="btn rounded sm:w-fit"
            disabled={isSubmitted} // Deshabilita el botón después de enviar
          >
            {isSubmitted ? "Enviado" : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
