import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.homeWrapper}>
    <h1>No Stone Unturned</h1>
    <div className={styles.textContainer}>
        <p>Little spoon landscaping is a family owned and operated business specializing in Landscape and Design, we take great pride in having a high standard of care and regard for the work we do, and a great team that shares the same values. Our goal is to bring your outdoor vision to life, creating a gorgeous space that enhances your home. We pay attention to the details, leaving no stone unturned to ensure each project receives the same level of commitment and care.</p>
    </div>

    <button>Services</button>
    <h2>PROFESSIONAL LANDSCAPE SERVICES</h2>
    <p>We offer a comprehensive list of gardening, irrigation, and hardscaping services for the Lower Mainland and the Fraser Valley</p>

    <div>
      <image />
      <p>Satisfaction for our clients is our top priority. How we achieve this is by being thorough, detail oriented and keeping lines of communication open. We hope to foster long good standing relationships within our community by providing a high level of  support before, during and after the project through regular communication, project updates, and comprehensive after-care instructions to ensure the longevity of your investment.</p>
    </div>

    <div>
      <h2>Contact Us</h2>
      <p>Glen Valley, BC</p>
      <h3>Hours</h3>
      <p>Monday - Friday: 10am - 6pm</p>
      <h4>Phone</h4>
      <p>604-123-4567</p>
      {/* insert map here */}
    </div>
    </div>
  )
}
export default Home