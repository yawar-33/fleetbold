import { BUSINESS_NAME, BUSINESS_NAME_DOMAIN } from "@/app/(others)/config";

 
  interface FaqData {
    id: number;
    quest: string;
    ans: string;
  }
  
  export function generateCitySeoData(locations:any): FaqData[] {
    
    const questions = [
      "What is the Average Price per Seller Lead in {location}?",
      "How Long Does It Take for a Real Estate Lead to Become a Deal in {location}?",
      "How Much Money Does a Real Estate Agent Earn in {location}?",
      "How Can I Get Free Real Estate Leads in {location}?",
      "How to Start Generating Real Estate Leads Today in {location}?",
      "How Many Real Estate Leads Do I Need to Generate to Get an Appointment in {location}?",
      "What is the Average Number of Appointments That Turn Into Deals in {location}?",
      "How to Generate Real Estate Buyer Leads with Facebook Ads in {location}?",
      "How to Generate Motivated Real Estate Seller Leads in {location}?"
    ];
  
    let idCounter = 1;
    const leadDataArray: FaqData[] = [];
  
    for (const location of locations) {
      for (const questionTemplate of questions) {
        const question = questionTemplate.replace(/{location}/g, `${location?.target=="County"? location?.name : `${location?.name} ${location.targetType}`}, ${location.acAdministrativeAreaLevel1ShortName}`);
        const answer = generateAnswer(question, location); // Placeholder function for generating answers
  
        leadDataArray.push({
          id: idCounter++,
          quest: question,
          ans: answer
        });
      }
    }
  
    return leadDataArray;
  }
  
  function generateAnswer(question: string, location: any): string {
    if (question.includes("Average Price per Seller Lead")) {
      return `The average price per seller lead in ${location.name}, ${location.acAdministrativeAreaLevel1ShortName} is approximately $15 for every $200 spent on advertising. However, investing more in advertising can reduce the cost per lead significantly. For instance, spending $1000 can bring the cost down to $12 per lead.`;
    } else if (question.includes("Real Estate Lead to Become a Deal")) {
      return `In ${location.name}, ${location.acAdministrativeAreaLevel1ShortName}, the time it takes for a real estate lead to become a deal can vary greatly. It can be as quick as less than a month or extend up to a year. Success depends on numerous factors, including follow-up strategies and market conditions. To expedite the process, generating a higher volume of leads can increase the chances of quick conversions.`;
    } else if (question.includes("Real Estate Agent Earn")) {
      const perDealEarnings = (location.avghomeprice * 0.03).toFixed(2);
      const yearlyEarnings = (location.avghomeprice * 0.03 * 12).toFixed(2);
      const topProducerEarnings = (location.avghomeprice * 0.03 * 30).toFixed(2);
      return `In ${location.name}, ${location.acAdministrativeAreaLevel1ShortName}, a real estate agent can earn up to $${perDealEarnings} per deal. Annually, this amounts to about $${yearlyEarnings} on average. Top producers, who close more than 30 deals per year, can earn over $${topProducerEarnings} annually.`;
    } else if (question.includes("Get Free Real Estate Leads")) {
      return `To get free real estate leads in ${location.name}, ${location.acAdministrativeAreaLevel1ShortName}, register as a user at ${BUSINESS_NAME_DOMAIN}. Our platform offers experimental leads at no cost, helping you kickstart your lead generation efforts.`;
    } else if (question.includes("Start Generating Real Estate Leads")) {
      return `To start generating real estate leads today in ${location.name}, ${location.acAdministrativeAreaLevel1ShortName}, use the services provided by ${BUSINESS_NAME}. Our platform offers proven strategies and optimized ads, along with a cloud-based Client Panel and follow-up tools to automate your lead contact process.`;
    } else if (question.includes("Real Estate Leads Do I Need to Generate")) {
      return `In ${location.name}, ${location.acAdministrativeAreaLevel1ShortName}, you typically need to generate between 20 to 25 leads to secure an appointment. Increasing your ad spend can reduce this number by attracting leads with higher intent to act.`;
    } else if (question.includes("Average Number of Appointments That Turn Into Deals")) {
      return `On average, about 1 in 5 appointments in ${location.name}, ${location.acAdministrativeAreaLevel1ShortName} turn into deals. Improving your personal brand, sales skills, and providing exceptional value to potential clients can increase this conversion rate.`;
    } else if (question.includes("Generate Real Estate Buyer Leads with Facebook Ads")) {
      return `To generate real estate buyer leads in ${location.name}, ${location.acAdministrativeAreaLevel1ShortName}, Facebook Ads are highly effective. Use targeted, visually appealing graphic ads with strong calls to action. Highlight market trends, such as rising or falling property prices, to create a sense of urgency among potential buyers.`;
    } else if (question.includes("Generate Motivated Real Estate Seller Leads")) {
      return `Google Ads is the best method to generate motivated seller leads in ${location.name}, ${location.acAdministrativeAreaLevel1ShortName}. These users actively search for specific actions, making them more likely to convert quickly. Investing in Google Ads ensures you reach these motivated sellers efficiently.`;
    } else {
      return `Detailed information for ${location.name}, ${location.acAdministrativeAreaLevel1ShortName} is currently unavailable.`;
    }
  }
  
  
  