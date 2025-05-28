import { SiKofi } from 'react-icons/si';
import { CiCoffeeCup } from 'react-icons/ci';
import { MdLocalGroceryStore } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";

export default function Footer(){
    return(
        <footer className="bg-dark text-white pt-4">
            <hr></hr>
            <div className="row text-center">
                <div className="col-md-6">
                    <h4>Links</h4>
                    <ul className='text-center'>
                        <li>
                            <a  className = 'btn btn-primary fw-bold'
                                href="https://github.com/Lebubble-Scripts"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub size={32}/> GitHub
                            </a>
                        </li>
                        <li>
                            <a  className = 'btn btn-primary fw-bold'
                                href="https://lebubble-scripts.gitbook.io/lebubble-scripts-docs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiGitbook size={32} /> Documentation
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h4>Support</h4>
                    <ul className='text-center'>
                        <li>
                            <a  className = 'btn btn-primary fw-bold'
                                href="https://ko-fi.com/lebubble"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiKofi size={32}/> Support on Ko-fi
                            </a>
                        </li>
                        <li>
                            <a  className = 'btn btn-primary fw-bold'
                                href="https://www.buymeacoffee.com/lebubble"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <CiCoffeeCup size={32} /> Buy Me a Coffee
                            </a>
                        </li>
                        <li>
                            <a  className = 'btn btn-primary fw-bold'
                                href="https://lebubble-scripts.tebex.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MdLocalGroceryStore size={32}/> Tebex
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='text-center'>
                © {new Date().getFullYear()} Lebubble Scripts. All rights reserved.
            </p>
        </footer>
    )
}