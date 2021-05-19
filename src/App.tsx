import React,{useEffect,useState} from 'react';
import './App.css';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'eu-west-2',
        userPoolId: 'eu-west-2_PTVNA9KQq',
        mandatorySignIn: true,
        userPoolWebClientId: '3bhmeeglj4tj009n5bt6kh1hd5',
    }
});

function App() {

    const [certificates, setCertificates] = useState<any[]>([]);

    useEffect(() => {

        Auth.currentSession().then(res=>{
            let accessToken = res.getAccessToken()
            let jwt = accessToken.getJwtToken()
            fetch('https://r9uvvmu7q7.execute-api.eu-west-2.amazonaws.com/certificates', {
                headers:{
                    "Authorization": `Bearer ${jwt}`
                }
            })
                .then(r=>r.json())
                .then(data=>{
                    setCertificates(data.certificates)
                })
        })


    }, []);

    return (
        <Container>
            <AmplifySignOut/>
            <Row>
                <Col><h1>CertSecu.re</h1></Col>
            </Row>
            <Row>
                <Col><h2>My Certificates</h2>
                </Col>
            </Row>
            {certificates.map(certificate=>
            <Row>
                <Col>
                    <Card>
                        <Card.Body className="pb-2">
                            <Card.Title className="mb-1">{certificate.name}<small className="text-muted" style={{
                                float: "right",
                                fontSize: "60%"
                            }}>Exp: 23/06/2021</small></Card.Title>
                            <Card.Subtitle className="mb-0 text-muted">St. John Ambulance</Card.Subtitle>
                            <Button variant="link" style={{float: "right"}}>Details</Button>&nbsp;
                        </Card.Body>

                    </Card>
                </Col>
            </Row>)}
        </Container>
    );
}

export default withAuthenticator(App);
