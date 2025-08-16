import { useEffect } from 'react';

const FAQSchema = ({ faqs }) => {
  useEffect(() => {
    if (!faqs || faqs.length === 0) return;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Add FAQ schema to head
    let faqScript = document.querySelector('#faq-schema');
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.id = 'faq-schema';
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqSchema);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('#faq-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [faqs]);

  return null;
};

export default FAQSchema;