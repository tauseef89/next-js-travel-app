export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3004/packages');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(place => {
    return {
      params: { id: place.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('http://localhost:3004/packages/' + id);
  const data = await res.json();

  return {
    props: { place: data }
  }
}

const Details = ({ place }) => {
  return (
    <div>
      
      <h3>{ place.title }</h3>
      <p>{ place.info }</p>
      <p>{ place.price }</p>
      <p>{ place.duration }</p>
    </div>
  );
}

export default Details;