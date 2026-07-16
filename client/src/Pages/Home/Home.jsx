import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import JobCard from "../../components/JobCard/JobCard";
import Companies from "../../components/Companies/Companies";
import Stats from "../../components/Stats/Stats";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar />

      <section
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "60px auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Featured Jobs
        </h2>
        <Companies />
<Stats />
<WhyChooseUs />
<Footer />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          <JobCard
            title="Frontend Developer"
            company="Google"
            location="Bangalore"
          />

          <JobCard
            title="Backend Developer"
            company="Microsoft"
            location="Hyderabad"
          />

          <JobCard
            title="Full Stack Developer"
            company="Amazon"
            location="Chennai"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
