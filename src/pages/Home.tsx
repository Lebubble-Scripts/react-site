

export default function Home() {
    return (
        <div className="container text-white text-center">
            <h1 className='page-header'>Home</h1>
            <p>
                Welcome to Lebubble Scripts! We're excited to share our collection of FiveM scripts with you. Our scripts are designed to enhance your gaming experience, providing unique features and functionalities for your server. 
                <br></br>
                <br></br>
                Each script is designed with the end-user in mind, ensuring ease of use and integration. 
                <br></br>
                <br></br>
                If you have any problems with a script, please open an ticket in the <a href="https://discord.gg/CUX8hVnswZ" target="_blank" rel="noopener noreferrer" className="text-info">Discord</a> server.
            </p>
            <hr></hr>
            <br></br>
            <h3>Most Recent Script</h3>
            <div className="d-flex justify-content-center mb-4">
                <div className="card bg-dark text-white" style={{ maxWidth: '28rem' }}>
                    <div className="card-body">
                        <a target="_blank" rel="noopener noreferrer" href="https://lebubble-scripts.tebex.io/package/6865798" className="text-decoration-none text-white">
                            <h3 className="card-title mb-3">lbs_drugun</h3>
                            <img src="../images/lbs_drugrun_400.png" className="rounded mb-4" alt="Item 3" />
                            <h6 className="card-subtitle mb-2 text-info">Released</h6>
                            <p className="card-text">
                                A QBCore drug running script designed to enhance the gameplay experience with immersive features and robust functionality. This script is currently under development, focusing on creating a seamless and engaging drug running experience for players.
                            </p>
                            <span className="badge bg-primary">1.0</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
