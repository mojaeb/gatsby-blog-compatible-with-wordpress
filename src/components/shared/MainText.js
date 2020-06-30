import React from 'react';
import Styles from './MainText.module.css'
export default function MainText() {
  return (
    <div  className={Styles.container}>
      <div className={Styles.author}>
        <div className={Styles.box}>
          <p>Written by</p>
          <b>mohamadjafar ebrahimi</b>
          <img src="/images/avatar.jpg" alt=""/>
        </div>
      </div>
      <div className={Styles.text}>
        <main>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin autem est in ea, quod quidam volunt, nihil impedit hanc nostram comprehensionem summi boni. Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. Cupit enim dícere nihil posse ad beatam vitam deesse sapienti. Nec lapathi suavitatem acupenseri Galloni Laelius anteponebat, sed suavitatem ipsam neglegebat; Effluit igitur voluptas corporis et prima quaeque avolat saepiusque relinquit causam paenitendi quam recordandi. Duo Reges: constructio interrete. Cum audissem Antiochum, Brute, ut solebam, cum M.
          Itaque vides, quo <strong>Important text</strong>, nova verba fingunt, deserunt usitata. Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Atqui eorum nihil est eius generis, ut sit in fine atque extrerno bonorum. Quae contraria sunt his, malane? Sed quid attinet de rebus tam apertis plura requirere? Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter. Quo modo autem optimum, si bonum praeterea nullum est? Odium autem et invidiam facile vitabis. Quamquam tu hanc copiosiorem etiam soles dicere. Qui enim existimabit posse se miserum esse beatus non erit. Non igitur de improbo, sed de callido improbo quaerimus, qualis Q.
          Reguli reiciendam; Non potes, nisi retexueris illa.
          <br/>
          Indicant pueri, in quibus ut in speculis natura cernitur. Cum praesertim illa perdiscere ludus esset. Materiam vero rerum et copiam apud hos exilem, apud illos uberrimam reperiemus. Primum Theophrasti, Strato, physicum se voluit; Si longus, levis. Hic nihil fuit, quod quaereremus.
        </main>
        <Author name={'mohamadjafar ebrahimi'}/>
      </div>
      <div className={Styles.other}/>
   </div>
  )
}

const Author = ({name}) => (
  <div className={Styles.bottom_author}>
    <div className={Styles.bottom_author_pic}>
      <img src="/images/avatar.jpg" alt={name}/>
    </div>
    <div className={Styles.bottom_author_text}>
      <small>Written by</small>
      <b>{name}</b>
      <p>Indicant pueri, in quibus ut in speculis natura cernitur. Cum praesertim illa perdiscere ludus esset. Materiam vero rerum et copiam apud hos exilem, apud ill</p>
    </div>
  </div>
)















