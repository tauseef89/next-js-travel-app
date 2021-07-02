import styles from '../../styles/Packages.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3004/packages');
  const data = await res.json();

  return {
    props: { packages: data }
  }
}

const Packages = ({ packages }) => {
  // console.log(packages)

  return (
    <div>
      <h1>All Holiday Packages</h1>
      {packages.map( place => (
        <Link href={'/packages/' + place.id} key={place.id}>
          <a className={styles.single}>
            <h3>{ place.title }</h3>
            <p>{ place.info }</p>            
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Packages;