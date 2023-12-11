import React from 'react';
import "./gope.css";

export default function gope() {
    return (
        <div>
            <footer id='rodape'>


                <div id="img"> {/* inserindo imagem e texto */}
                    <img src={"imagens/iconereduzido.png"} alt="ICONE DO SITE" />
                    <div id="textobaixo">
                        <p>Quiz para se divertir</p>
                        <p>e passar o tempo!!</p>
                        <p id="anobaixo">&copy; 2023</p>
                    </div>
                </div>


            </footer>
        </div>
    )
}
