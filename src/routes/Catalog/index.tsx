import "./styles.css";
import Header from "../../components/Header";
import CarCard from "../../components/CarCard";
import CommentCard from "../../components/CommentCard";
import Footer from "../../components/Footer";

export default function Catalog() {
  return (
    <>
      <Header />
      <main className="dsct-catalog-main">
        <section id="dsct-catalog-section">
          <div className="dsct-catalog-car-cards-container">
            <h3>Venha nos visitar</h3>
            <CarCard />
            <CarCard />
          </div>

          <div className="dsct-catalog-comment-cards-container">
            <h3>O que estão dizendo</h3>
            <div>
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
