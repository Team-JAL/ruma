import "./wireframe.css";
import mock from "../assets/mock.png";
import { previews } from "../assets/reason";

interface Preview {
  title: string;
  desc: string;
}

const Wireframe = () => {
  return (
    <section className="wireframe" id="wireframe-section">
      <h2>Ruma - Preview</h2>

      <div className="wireframe-content">
        <img src={mock} alt="Mock preview" />
        <div className="wf-content-right">
          {previews.map((i: Preview, index: number) => (
            <Card key={index} preview={i} />
          ))}

          <a href="#footer-section" className="hero_button">
            Interested ? 
          </a>
        </div>
      </div>
    </section>
  );
};

const Card = ({ preview }: { preview: Preview }) => {
  return (
    <div className="wireframe-card">
      <h5>{preview.title}</h5>
      <p>{preview.desc}</p>
    </div>
  );
};

export default Wireframe;
