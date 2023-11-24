import { motion } from "framer-motion";
import myPic from "../assets/me.jpg";
//import myPic from "../assets/me2.png";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
// import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Iris Nguyen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software engineer by day, <br className='sm:block hidden' />
            Novice artist and philosopher by night 
          </p>
          <br></br>
          <br></br>
          <p>
          <div className={`${styles.customContainer}`}>
            <a href='#about'>
            <div className={`${styles.customImg}`}>
              <img src={myPic} alt="My Image" />
            </div>
            <div className={`${styles.customTxt}`}>
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
              > 
                <div className="overflow-auto flex absolute inset-y-0 right-0 w-1/2 ms-40 pl-6">
                <span>
                  <p> 
                  Hello lovely people! </p>
                  <p>
                  I am currently working at <a className="underline decoration-pink-500" href="https://www.nagarro.com/en">Nagarro</a>-a growing tech company. Interested in both arts and science, I graduated with a degree in Computer Science and Philosophy at <a className="underline decoration-sky-500" href="https://www.pace.edu/">Pace University</a> Click <a className="underline decoration-pink-500" href="https://drive.google.com/file/d/18-X9AMvCTSyyrW99oZvtTb8LSfu5kxrf/view?usp=sharing">here</a> for my CV. </p> <br></br> Outside of work, I create fun coding and research projects around causes I care about: mental health, misinformation, and education. Things I do for fun include but not limited to dancing, taekwondo, kickboxing, piano, and guitar. Occassionally, I sing at <a className="underline decoration-pink-500" href="https://newyork.theroostnyc.com/">The Roost</a>.<br></br>Check out my <a className="underline decoration-sky-500" href="https://www.behance.net/eyewrist">art</a> and mental health <a className="underline decoration-pink-500" href="https://forms.gle/mt9tB16EAjxGuf7W8">survey</a>!</span>
                </div>
                
               
              </motion.p>
            </div>

            </a>
          </div>
          </p>

        </div>
      </div>



      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}

    </section>
  );
};

export default Hero;