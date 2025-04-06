import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link
        to="/contact"
        className="btn bg-blue-900 text-white rounded-lg px-8 py-4 text-2xl hover:bg-blue-100 hover:scale-105 transition-transform duration-300"
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
