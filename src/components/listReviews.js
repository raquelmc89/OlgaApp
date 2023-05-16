const list = [
  {
    name: "Olga Z.",
    reviewEnglish:
      "I would like to express my great gratitude to psychologist Olga Maksymenko for her high professionalism and wonderful human qualities. It was extremely pleasant for me to communicate with her, I was really looking forward to our working sessions. And I have a big request - if there is an opportunity to continue our classes with Olga, I will be very happy. Communication with such a wonderful person is already a big guarantee of success. There would be more such talented specialists. Thank you very much for her.",
    reviewID: "1",
  },
  {
    name: "Kateryna A.",
    reviewEnglish:
      "Two months ago, I was broken, emotionally burned out, without a goal and not understanding how to live on. We spent three weeks working together with Olga, and I was able to rehabilitate at a pace that was comfortable for me. I received huge human support, which I really missed. Her support helped me to form goals, revive my potential and start acting.",
    reviewID: "2",
  },
  {
    name: "Larisa M.",
    reviewEnglish:
      "I visited many psychologists, but the feeling inside suggested that it was not mine... And when I turned to Olga, I immediately understood that she is the one who will definitely help me.",
    reviewID: "3",
  },
];

const ListReviews = () => {
  return list.map(function (item) {
    return (
      <div className="listReviews" key={item.reviewID}>
        <div className="reviewsName">{item.name}</div>
        <div className="reviewsContent">{item.reviewEnglish}</div>
      </div>
    );
  });
};

export default ListReviews;
