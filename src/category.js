const category =[
    { value: "Product Management", label: "Product Management" },
    { value: "Consulting", label: "Consulting" },
    { value: ["Product Management","Consulting"], label: "Both" },
  ];

const category1 =  [
    { value: "Product Management", label: "Product Management" },
    { value: "Consulting", label: "Consulting" }
  ];

const product = [
    { value: "Product Management" , label: "Select All"},
    { value: "Product Design", label: "Product Design" },
    { value: "Product Improvement", label: "Product Improvement" },
    { value: "Product Strategy", label: "Product Strategy" },
    { value: "Metrices", label: "Metrices" },
    { value: "Root cause analysis", label: "Root cause analysis" },
    { value: "Product Guesstimates", label: "Product Guesstimates" },
    { value: "Product Behavorial", label: "Product Behavorial" },
  ];

const consulting = [
    { value: "Consulting" , label: "Select All"},
    { value: "Profitability", label: "Profitability" },
    { value: "Market entry", label: "Market entry" },
    { value: "Market sizing", label: "Market sizing" },
    { value: "Unconventional cases", label: "Unconventional cases" },
    { value: "Consult Guesstimates", label: "Consult Guesstimates" },
    { value: "Consult Behavorial", label: "Consult Behavorial" },
    { value: "Valuation", label: "Valuation" },
  ];

  const both = [
    {
      label: "Product Management",
      options: product,
    },
    {
      label: "Consulting",
      options: consulting,
    },
  ];

  const productmodal = [
    { value: "Product Design", label: "Product Design" },
    { value: "Product Improvement", label: "Product Improvement" },
    { value: "Product Strategy", label: "Product Strategy" },
    { value: "Metrices", label: "Metrices" },
    { value: "Root cause analysis", label: "Root cause analysis" },
    { value: "Product Guesstimates", label: "Product Guesstimates" },
    { value: "Product Behavorial", label: "Product Behavorial" },
  ];

const consultingmodal = [
    { value: "Profitability", label: "Profitability" },
    { value: "Market entry", label: "Market entry" },
    { value: "Market sizing", label: "Market sizing" },
    { value: "Unconventional cases", label: "Unconventional cases" },
    { value: "Consult Guesstimates", label: "Consult Guesstimates" },
    { value: "Consult Behavorial", label: "Consult Behavorial" },
    { value: "Valuation", label: "Valuation" },
  ];

  const bothmodal = [
    {
      label: "Product Management",
      options: productmodal,
    },
    {
      label: "Consulting",
      options: consultingmodal,
    },
  ];



export {category,category1,product,consulting,both,productmodal,consultingmodal,bothmodal}