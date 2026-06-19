import "../styles/Works.css";
const items = [
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Bangsilog.jpg",
    title: "Bangsilog",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/yty.jpg",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Caesar.jpg",
    title: "Caesar Salad",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Chopsuey%20(1).jpg",
    title: "Chopsuey Rice Bowl",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Chopsuey.jpg",
    title: "Chopsuey",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Coffee%20&%20Muffin.jpg",
    title: "Coffee and Muffin",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Coffee%20Break.jpg",
    title: "CoffeeBreak",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Curry.jpg",
    title: "Curry",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Matchaaa.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pasta%201.jpg",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pasta%202.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pasta%203.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pasta%204.jpg",
    title: "1st item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/drink.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pork%20Adobo.jpg",
    title: "2nd item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Pork%20Tonkatsu.jpg",
    title: "3rd item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Salad%2010.png",
    title: "4th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Teriyaki.jpg",
    title: "5th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Tonkatsu.jpg",
    title: "6th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Veggie%20Bowl.jpg",
    title: "7th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Whisky.jpg",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/iWork.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/July%20first.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Productivity%20hub.jpg",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Remote%20work.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/iStudy.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/iStudy%20Goals.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/iStudy%20Pass.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/June%20iStudy.jpg",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Study%20Buddy%20(May%2011).jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Study%20Session.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Study%20Smarter.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Chill%20Nights.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Focus.jpg",
    title: "8th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Game%20Night.jpg",
    title: "9th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/Great%20Nights.jpg",
    title: "10th item",
  },
  {
    src: "https://gasrncdfxphcxiwjevzl.supabase.co/storage/v1/object/public/works/iPlay%2015.jpg",
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
