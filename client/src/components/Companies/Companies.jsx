import "./Companies.css";

function Companies() {

    const companies = [
        "Google",
        "Microsoft",
        "Amazon",
        "TCS",
        "Infosys",
        "Accenture",
        "IBM",
        "Wipro"
    ];

    return (

        <section className="companies">

            <h2>Top Hiring Companies</h2>

            <div className="company-grid">

                {companies.map((company,index)=>(

                    <div className="company-card" key={index}>
                        {company}
                    </div>

                ))}

            </div>

        </section>

    );

}

export default Companies;
