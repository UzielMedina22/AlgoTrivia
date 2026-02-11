import { Link } from 'react-router-dom';

export default function Inicio() {
    return (
        <div className="container_1 is-flex is-flex-direction-column"
            style={{
                margin: 'auto',
                height: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                }}>
            <p className="is-size-1 has-text-centered has-text-weight-bold">AlgoTrivia</p>
            <p className="pt-5 is-size-3 has-text-centered has-text-weight-semibold">Instrucciones:</p>
            <p className="py-2 pb-6 is-size-4 has-text-centered">Responde las preguntas correctamente.</p>
            <div className="is-flex is-justify-content-center">
                <Link className="p-3 button is-size-4" to="/play"
                style={{
                    boxShadow: '0 4px 10px rgb(20, 17, 20)',
                }}>Jugar</Link>
            </div>
       </div > 
    );
}