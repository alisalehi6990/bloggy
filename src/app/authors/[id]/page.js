const AuthorDetail = async(props) => {
  const { id } = await props.params;

  return (
    <div>
      <h1>Author Page</h1>
      <p>Author ID: {id}</p>
    </div>
  );
};

export default AuthorDetail;
