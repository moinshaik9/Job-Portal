import "./WhyChooseUs.css";

function WhyChooseUs() {

    const features = [
        {
            title: "Verified Companies",
            description: "Only genuine companies can post jobs."
        },
        {
            title: "Easy Job Search",
            description: "Search thousands of jobs instantly."
        },
        {
            title: "Secure Applications",
            description: "Your profile and resume are safe."
        },
        {
            title: "Career Growth",
            description: "Find internships and full-time jobs."
        }
    ];

    return (
        <section className="why">
            <h2>Why Choose JobPortal?</h2>

            <div className="why-grid">

                {features.map((item,index)=>(

                    <div className="why-card" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>

                ))}

            </div>
        </section>
    );
}

export default WhyChooseUs;
