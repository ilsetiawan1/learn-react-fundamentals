function Article(props) {
  return (
    <div>
      <h2 className="text-xl font-bold">Pengajar: {props.name}</h2>
      <div>
        {props.titles.map((title) => {
          return <div>- {title}</div>;
        })}
      </div>
    </div>
  );
}

export default Article;
