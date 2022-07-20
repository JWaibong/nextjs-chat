import {Header} from '../components/Header'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), {ssr: false})

const Chat = () => {


    return (
        <div className={styles.container}>
            <Header/> 

            <AblyChatComponent />
        </div>
    )
}

export default Chat