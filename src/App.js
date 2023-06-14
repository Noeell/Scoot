import './App.css';
import {Container} from '@mui/material';
import ReactPlayer from 'react-player';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function App() {
    return (
        <div className="App">
            <Container>
                <h1 className="scoottitle">Scoot</h1>
                <div className='playerDiv'>
                    <ReactPlayer width={'100%'} height='100%'
                                 url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                                 playing={true}
                                 muted={true}
                                 controls={true}
                    />
                </div>
                <br/>
                <Card style={{backgroundColor: "lightgrey"}} sx={{minWidth: 100}}>
                    <CardContent>
                        <Typography sx={{fontSize: 20}} color="text.secondary" gutterBottom>
                            <strong>Usain Rolled - Der schnellste Scooter der Welt</strong>
                        </Typography>
                        <Typography variant="body2">
                            Topspeed: 55km/h
                            <br/>
                            <strong>Preis: 1600.-</strong>
                        </Typography><br/>
                        <Typography sx={{fontSize: 17}}>
                            Der Usain Rolled ist ein herausragender Hochleistungs-eScooter, der eine beeindruckende
                            Kombination
                            aus Geschwindigkeit, Wendigkeit und Stil bietet. Dieses revolutionäre Fortbewegungsmittel
                            wurde speziell entwickelt, um die Bedürfnisse von Fahrern zu erfüllen, die nach einer
                            schnellen Fluchtmöglichkeit suchen, sei es vor der Polizei oder anderen Situationen, in
                            denen Geschwindigkeit und Wendigkeit von entscheidender Bedeutung sind.
                        </Typography>
                        <br/>
                        <Typography sx={{fontSize: 20}}>
                            - Ein echtes Männerspielzeug -
                        </Typography>
                    </CardContent>
                </Card><br/><br/>
            </Container>
        </div>
    );
}

export default App;
