import styles from './style.js'
import { Billing, Business, CTA, Footer, Navbar, Stats, Hero,CardDeal, Clients,Contact } from "./components";

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Clients/>
          <Billing/>
          <CardDeal/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App