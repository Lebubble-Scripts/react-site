export default function Projects() {
    return (
        <div className='container text-white text-center'>
            <h1 className='page-header'>Projects</h1>
            <div className='row g-4 mb-4'>
                <div className="col-md-6">
                    <div className="rounded h-100 project-card">
                        <h2 id='ps-header'>Project Sloth</h2>
                        <a href='https://github.com/Project-Sloth' target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                            <img src='../images/project_sloth_logo.png' alt='Project Sloth Logo' className="rounded-circle mb-4" style={{ width: '96px', height: '96px' }} />
                        </a>
                        <p className='p-1'>
                            Passionate developers and designers with a primary focus on providing quality resources. Our resources are open source and entirely free for all of the FiveM community to enjoy and use.
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="rounded h-100 project-card">
                        <h2 id='lbs-header'>Lebubble Scripts</h2>
                        <a href='/' rel='noopener noreferrer' className='text-decoration-none text-white'>
                            <img src='../images/lbs_scripts_logo_icon_96x96.png' alt="Lebubble Logo" className="rounded-circle mb-4" style={{ width: '96px', height: '96px' }} />
                        </a>
                        <p className="p-1">
                            A collection of custom scripts and resources for FiveM, designed to enhance gameplay and server functionality. Each script is crafted with care, ensuring a seamless integration into your server environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


{/* 
<a href='/' rel='noopener noreferrer' className='text-decoration-none text-white'>
                        <img src='../images/lbs_scripts_logo_icon_96x96.png' alt="Lebubble Logo" className="rounded-circle mb-4" style={{ width: '96px', height: '96px' }} />
                    </a>    



*/}