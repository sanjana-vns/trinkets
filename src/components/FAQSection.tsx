import FAQSectionTemplate from './FAQSectionTemplate'

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the best Piping Course In Mumbai?",
      answer: "Trinkets Institute offers the best Piping Course In Mumbai covering comprehensive piping design training including PDMS, SP3D, E3D, AutoCAD Plant 3D, CAESAR II, and piping stress analysis. Our piping course in Mumbai includes live industry projects and 100% placement assistance with 12+ years of industry experience."
    },
    {
      question: "Is the Piping Course In Mumbai suitable for beginners?",
      answer: "Yes, our Piping Course In Mumbai is designed for both beginners and experienced professionals. We start with piping design fundamentals and progress to advanced topics including 3D piping modeling, stress analysis, and industry standards. Our experienced piping instructors provide personalized attention to ensure every student succeeds."
    },
    {
      question: "What is the duration of Piping Course In Mumbai?",
      answer: "Our comprehensive Piping Course In Mumbai duration is 6 months with flexible timing options. We offer weekday, weekend, and evening batches for our piping design training. Fast-track 4-month piping courses are also available for working professionals in Mumbai with hands-on practice with real Mumbai manufacturing projects."
    },
    {
      question: "Do you provide placement assistance after Piping Course In Mumbai?",
      answer: "Yes, we provide 100% placement assistance after completing our Piping Course In Mumbai. Our dedicated placement team has partnerships with leading oil & gas, petrochemical, and EPC companies. Students from our piping course in Mumbai get placed in top companies with attractive packages and guaranteed job placement support."
    },
    {
      question: "What software is covered in Piping Course In Mumbai?",
      answer: "Our Piping Course In Mumbai covers industry-standard piping design software including PDMS, SP3D (SmartPlant 3D), E3D, AutoCAD Plant 3D, CAESAR II for stress analysis, and PDS. You'll gain hands-on experience with the same piping design tools used by professionals in Mumbai's top engineering companies with expert training."
    },
    {
      question: "What certification do I get after Piping Course In Mumbai?",
      answer: "After completing our Piping Course In Mumbai, you receive industry-recognized piping design certification from Trinkets Institute. We also provide preparation for PDMS, SP3D, and CAESAR II professional certifications that are highly valued by employers in Mumbai's engineering sector with 100% job placement support."
    }
  ]

  return (
    <FAQSectionTemplate
      title="Piping Course In Mumbai"
      subtitle="Everything You Need to Know"
      description="Get answers to the most common questions about our Piping Course in Mumbai. Learn about training duration, placement assistance, and career opportunities."
      faqs={faqs}
      phoneNumber="+91-9820924788"
    />
  )
}

export default FAQSection