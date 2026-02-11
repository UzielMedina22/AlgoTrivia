import { useState } from "react";

type Question = {
    question: string;
    image?: string;
    options: string[] | number[];
    correctAnswer: string | number;
}

const questions: Question[] = [
    {
        question: "Consiste en el conjunto de pasos o instrucciones en un código para obtener un resultado.",
        image: "https://pixabay.com/get/g11784b92c82c0e3b01e8f7eac06fd252d82239b8232ad53ea184bf2aed968b040ed68edf911720c32fa73273bf39f895_1280.jpg",
        options: [
            "Algoritmo",
            "Variable",
            "Script",
            "Función"
        ],
        correctAnswer: "Algoritmo"
    },
    {
        question: "Este tipo de dato de variables consiste en texto (letras y/o números).",
        image: "../../public/text.png",
        options: [
            "Boolean",
            "Integer",
            "Float",
            "String"
        ],
        correctAnswer: "String"
    },
    {
        question: "Son datos que pueden cambiar mientras se ejecuta un programa.",
        image: "../../public/vars.png",
        options: [
            "Algoritmo",
            "Variable",
            "Parámetro",
            "Función"
        ],
        correctAnswer: "Variable"
    },
    {
        question: "Este tipo de dato de variables consiste en números decimales.",
        image: "../../public/decimal.png",
        options: [
            "Boolean",
            "Integer",
            "Float",
            "String"
        ],
        correctAnswer: "Float"
    },
    {
        question: "Fue un investigador de Países Bajos que fue muy influyente en las ciencias computacionales. Una de sus contribuciones fue el desarrollo de un algoritmo para encontrar el camino más corto. ¿Cuál es su nombre?",
        image: "../../public/grafo.jpg",
        options: [
            "Stephen Warshall",
            "Bill Gates",
            "Edsger Dijkstra",
            "Bjarne Stroustrup"
        ],
        correctAnswer: "Edsger Dijkstra"
    },
    {
        question: "¿Cuál es el nombre del creador de C++?",
        image: "../../public/cpp.png",
        options: [
            "Stephen Warshall",
            "Bill Gates",
            "Edsger Dijkstra",
            "Bjarne Stroustrup"
        ],
        correctAnswer: "Bjarne Stroustrup"
    },
    {
        question: "Este lenguaje de programación de alto nivel fue desarrollado en 1995. Utiliza su propia máquina virtual y se ha utilizado en aplicaciones de escritorio, desarrollo web, videojuegos, etc. ¿Cómo se llama?",
        image: "https://pixabay.com/get/g37323280e07c74c7ea3cb686a1b563374576a86bdb78979a9a9646fdb4267be622559131fe121cb2184ad2cdab535b6e3f2cc0def54a5851b8a558fd1839fa7a_1280.jpg",
        options: [
            "C++",
            "C",
            "JavaScript",
            "Java"
        ],
        correctAnswer: "Java"
    },
    {
        question: "Este lenguaje no es de programación. Sin embargo, provee la estructura de una página web. ¿Cómo se llama?",
        image: "../../public/web.png",
        options: [
            "Markdown",
            "HTML",
            "CSS",
            "LaTeX"
        ],
        correctAnswer: "HTML"
    },
    {
        question: "Resuelve este problema de código. ¿Cuál es el valor final de j?",
        image: "../../public/python_problem.png",
        options: [
            370,
            420,
            -18,
            5987
        ],
        correctAnswer: 370
    },
    {
        question: "Este lenguaje de programación es de bajo nivel, es decir, cercano al lenguaje máquina. Se utiliza en sistemas operativos, sistemas embebidos, etc. ¿Cómo se llama?",
        image: "https://pixabay.com/get/gf688be0d98f6974edd3a6a9332f7f06d14d60a2e2904ac473d876666c4df98caae67736110ceced8b902a6ddae894c307defec0de4219e11d413e606f8ef02ee94f22efc37a41226d8fcf74c7a1a586c_640.jpg",
        options: [
            "Java",
            "Assembly (Ensamblador)",
            "C++",
            "C#"
        ],
        correctAnswer: "Assembly (Ensamblador)"
    },
]


export default function Juego() {
    const [counter, setCounter] = useState(1);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    // Initialize game.
    const [currentQuestion, setCurrentQuestion] = useState(() => Math.floor(Math.random() * questions.length));
    const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([currentQuestion]);

    const nextQuestion = () => {
        let questionIdx = Math.floor(Math.random() * questions.length);

        while (answeredQuestions.includes(questionIdx)) {
            console.log(`Pregunta ${questionIdx} ya respondida, buscando otra...`);
            questionIdx = Math.floor(Math.random() * questions.length);
        }

        console.log(`Pregunta ${questionIdx} seleccionada.`);

        setAnsweredQuestions(prev => [...prev, questionIdx]);
        setCurrentQuestion(questionIdx);
        console.log(`Preguntas respondidas: ${answeredQuestions}`);
    }


    return (
        <div className="container_1"
            style={{
                height: '100%',
            }}>

            {
                counter <= questions.length && (
                    <>
                        <p className="py-4 has-text-centered is-size-2">Pregunta {counter}</p>
                        <p className="pb-5 has-text-centered is-size-5">{questions[currentQuestion].question}</p>

                        <div className="mt-5 columns">
                            <div className="column is-half is-flex is-justify-content-center">
                                <img src={questions[currentQuestion].image} alt={`Pregunta ${counter}`}
                                    style={{
                                        borderRadius: '10px',
                                        boxShadow: '0 4px 10px rgb(20, 17, 20)',
                                        width: '70%',
                                        height: 'auto',
                                        aspectRatio: '16/9',
                                        imageRendering: 'pixelated',
                                    }} />
                            </div>
                            <div className="column is-half is-flex is-flex-direction-column is-justify-content-center">
                                <p className="pb-5 has-text-centered is-size-5 has-text-weight-semibold">
                                    Opciones
                                </p>
                                <div className="is-flex is-flex-direction-column is-align-items-center"
                                    style={{ gap: '0.5rem' }}>
                                    {
                                        questions[currentQuestion].options.map((option, idx) => (
                                            <button className="p-3 button" key={idx}
                                                style={{
                                                    width: '80%',
                                                    boxShadow: '0 4px 10px rgb(20, 17, 20)',
                                                }}
                                                onClick={() => {
                                                    if (option === questions[currentQuestion].correctAnswer) {
                                                        setCorrectAnswers(prev => prev + 1);
                                                    }

                                                    if (counter < questions.length) {
                                                        setCounter(prev => prev + 1);
                                                        nextQuestion();
                                                    } else {
                                                        setCounter(prev => prev + 1);
                                                        console.log(`Preguntas respondidas: ${answeredQuestions}`);

                                                    }
                                                }}>
                                                <p>{option}</p>
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                counter > questions.length && (
                    <>
                        <div className="container_1 is-flex is-flex-direction-column"
                            style={{
                                margin: 'auto',
                                height: '100%',
                                minHeight: '100vh',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                            <p className="pb-4 is-size-2 has-text-centered">¡Juego terminado!</p>
                            <p className="py-2 has-text-centered is-size-4 has-text-weight-semibold">
                                Resultados:
                            </p>
                            <p className="py-2 has-text-centered is-size-2">
                                {correctAnswers * 100 / questions.length}%
                            </p>
                            <p className="pt-2 has-text-centered is-size-5">{correctAnswers} / {questions.length} respuestas correctas.</p>
                            {correctAnswers >= 8 && <p className="pt-2 has-text-centered is-size-4">¡Muy bien!</p>}
                            {correctAnswers <= 7 && correctAnswers > 5 && <p className="pt-2 has-text-centered is-size-4">¡Aún puedes mejorar!</p>}
                            {correctAnswers <= 5 && <p className="pt-2 has-text-centered is-size-4">¡Debes practicar más!</p>}
                        </div>
                    </>
                )
            }
        </div>
    );
}