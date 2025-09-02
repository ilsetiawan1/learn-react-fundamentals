function Article(props) {
  return (
    <div>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <small>Date: {props.date}, tags: {props.tags.join(", ")}</small>
    </div>
  );
}

export default Article;
