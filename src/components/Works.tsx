import "../styles/Works.css";
const items = [
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Bangsilog.jpg",
    title: "Bangsilog",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Caesar.jpg",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Chill_Nights.jpg",
    title: "Caesar Salad",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Chopsuey.jpg",
    title: "Chopsuey Rice Bowl",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Chopsuey_1.jpg",
    title: "Chopsuey",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Coffee_&_Muffin.jpg",
    title: "Coffee and Muffin",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Coffee_Break.jpg",
    title: "CoffeeBreak",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Curry.jpg",
    title: "Curry",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Curry.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/drink.jpg",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Game_Night.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Great_Nights.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/iPlay_15.jpg",
    title: "1st item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/iStudy.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/iStudy_Goals.jpg",
    title: "2nd item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/iStudy_Pass.jpg",
    title: "3rd item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/iWork.jpg",
    title: "4th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/July_first.jpg",
    title: "5th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/June_iStudy.jpg",
    title: "6th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Matchaaa.jpg",
    title: "7th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pasta_1.jpg",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pasta_2.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pasta_3.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pasta_4.jpg",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pork_Adobo.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pork_Tonkatsu.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Productivity_hub.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Remote_work.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Salad_10.png",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Study_Buddy_(May11).jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Study_Session.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Study_Smarter.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Teriyaki.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Tonkatsu.jpg",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Veggie_Bowl.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Whisky.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/yty.jpg",
    title: "10th item",
  },
];

function Works() {
  return (
    <div className="flexbox" style={{ marginTop: "80px" }}>
      {items.map((item, index) => (
        <div className="item" key={index}>
          <img src={decodeURIComponent(item.src)} alt={item.title} />
          {/* <p className="title">{item.title}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Works;
