import React, {useState, useEffect} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useForm } from 'react-hook-form';
import './index.css' 

function CadastroCategoria() {
    const { register, handleSubmit, errors } = useForm();

    function onSubmit(dados) {
        fetch(`http://localhost:8081/categorias`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        })
        .then(function (response) {
            return response.json();
        })
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", JSON.stringify(response)))
        }
        return (
            <div>
                <Header />
                <div className="container-fluid cadastro">
                    <div className="row">
                        <div className="text-center py-5 col-12">
                            <h1>Cadastro de Categoria</h1>
                        </div>
                        
                        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 pb-5">
                            <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                                <input type="text" className="form-control input" placeholder="Título" name="titulo" ref={register({required: true})} />
                                <br />
                                <input type="text" className="form-control input" placeholder="Descrição Extra" name="descricao" ref={register({required: true})} />
                                <br />
                                <input type="text" className="form-control input" placeholder="Link Extra" name="url" ref={register({required: true})} />
                                <br />
                                <input type="color" className="form-control input" placeholder="Cor" name="cor" ref={register({required: true})} />
                                <br />
                                <input type="submit" className="btn btn-dark btn-lg" value="Salvar"/>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    };
export default CadastroCategoria;