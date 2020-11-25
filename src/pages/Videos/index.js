import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css"

function CadastroVideo() {
    const { register, handleSubmit, errors } = useForm();
    const [categorias, setCategorias] = useState([]);
        return (
        <div>
            <Header />

            <div className="container-fluid cadastro">
                <div className="text-center py-5 col-12">
                    <h1>Cadastro de Vídeos</h1>
                </div>
            
                <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 pb-5">
                    <form className="container" id="video-form" onSubmit={handleSubmit()}>

                        <input type="text" className="form-control input" id="titulo" placeholder="Título" autofocus name="titulo" ref={register({ required: "Preencha este campo." })}/>
                        <p>{errors.titulo?.message}</p>
                        <br />
                        <textarea type="text" className="form-control input" placeholder="Descrição" name="description" ref={register({ required: "Preencha este campo." })}/>
                        <p>{errors.description?.message}</p>
                        <br />
                        <input type="text" className="form-control input" placeholder="Youtube URL" name="url" ref={register({ required: "Preencha este campo." })}/>
                        <p>{errors.url?.message}</p>
                        <br />

                        <select className="form-control input" name="categoriaId" ref={register}>
                            {categorias.map((value) => (
                                <option key={value.id} value={value.id}>
                                    {value.titulo}
                                </option>
                        ))}

                        </select>
                        <br />
                        <input type="submit" className="btn btn-dark btn-lg mr-4" value="Salvar"/>
                        <Link className="btn btn-secondary btn-lg mr-4" to="/categorias" role="button">Categorias</Link>
                        <Link className="btn btn-primary btn-lg" to="/" role="button">Home</Link>
                    </form>

                </div>

            </div>

            <Footer />
        </div>
    );
    }

export default CadastroVideo;