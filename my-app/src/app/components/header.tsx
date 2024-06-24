import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

export default function Header() {
    return (
        <header className="fixed w-screen h-16 z-10 pr-5">
            <div className="bg-white/5 w-full h-full backdrop-blur-md flex items-center pl-6 pr-6 text-white justify-between border-b border-white/10">
                <h2>Lucas Gabriel Moser da Silva</h2>
                <div className='flex gap-6'>
                    <a rel='noopener' title='Instagram' href="https://www.instagram.com/japinha_ms.08/" target="_blank" id='instagram'>
                        <label htmlFor='instagram' className='cursor-pointer'>
                            <FontAwesomeIcon icon={faInstagram} width={20} />
                        </label>
                    </a>
                    <a rel='noopener' title='GitHub' href="https://github.com/lucas-g-silva" target="_blank" id='github'>
                        <label htmlFor='github'  className='cursor-pointer'>
                            <FontAwesomeIcon icon={faGithub} width={20} />
                        </label>
                    </a>
                    <a rel='noopener' title='LinkedIn' href="#" target="_blank" id='linkedin'>
                        <label htmlFor='linkedin'  className='cursor-pointer'>
                            <FontAwesomeIcon icon={faLinkedin} width={20} />
                        </label>
                    </a>
                </div>
            </div>
        </header>
    )
}
