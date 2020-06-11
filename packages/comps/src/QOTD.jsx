import { createElement } from "@bikeshaving/crank";

async function QuoteOfTheDay() {
  const res = await fetch("https://favqs.com/api/qotd");
  const { quote } = await res.json();
  return (
    <p>
      “{quote.body}” – <a href={quote.url}>{quote.author}</a>
    </p>
  );
}

export default QuoteOfTheDay;
