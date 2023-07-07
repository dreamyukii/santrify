//import hook useState
import { useState } from 'react';

//import router
import Router from 'next/router';

//import layout
import Layout from '../../../components/Backend/Layout'

//import axios
import axios from "axios";

function SantriCreate() {

    //state
    const [gambar, setGambar] = useState('');
    const [nama, setNama] = useState('');
    const [gender, setGender] = useState('');
    const [room, setRoom] = useState('');
    const [status, setStatus] = useState('');
    const [division, setDivision] = useState('');

    //state validation
    const [validation, setValidation] = useState({});

    //function "handleFileChange"
    const handleFileChange = (e) => {

        //define variable for get value image data
        const imageData = e.target.files[0]

        //check validation file
        if (!imageData.type.match('image.*')) {

            //set state "image" to null
            setGambar('');

            return
        }

        //assign file to state "image"
        setGambar(imageData);
    }

    //method "storePost"
    const storePost = async (e) => {
        e.preventDefault();

        //define formData
        const formData = new FormData();

        //append data to "formData"
        formData.append('gambar', gambar);
        formData.append('nama', nama);
        formData.append('gender', gender);
        formData.append('room', room);
        formData.append('status', status);
        formData.append('division', division);
        
        //send data to server
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/santri`, formData)
        .then(() => {

            //redirect
            Router.push('/santri')

        })
        .catch((error) => {

            //assign validation on state
            setValidation(error.response.data);
        })
        
    };

    return (
        // <Layout>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card border-0 rounded shadow-sm">
                            <div className="card-body">
                                <form onSubmit={ storePost }>

                                    <div className="form-group mb-3">
                                        <label className="form-label fw-bold">Image</label>
                                        <input type="file" className="form-control" onChange={handleFileChange}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label fw-bold">NAMA</label>
                                        <input className="form-control" type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan Nama" />
                                    </div>
                                    {
                                        validation.nama &&
                                            <div className="alert alert-danger">
                                                {validation.nama}
                                            </div>
                                    }

                                    <div className="form-group mb-3">
                                        <label className="form-label fw-bold">GENDER</label>
                                        <textarea className="form-control" rows={3} value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Masukkan Gender" />
                                    </div>
                                    {
                                        validation.gender &&
                                            <div className="alert alert-danger">
                                                {validation.gender}
                                            </div>
                                    }

                                    <div className="form-group mb-3">
                                        <label className="form-label fw-bold">STATUS</label>
                                        <textarea className="form-control" rows={3} value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Masukkan Status" />
                                    </div>
                                    {
                                        validation.status &&
                                            <div className="alert alert-danger">
                                                {validation.status}
                                            </div>
                                    }

                                    <div className="form-group mb-3">
                                        <label className="form-label fw-bold">ROOM</label>
                                        <textarea className="form-control" rows={3} value={room} onChange={(e) => setRoom(e.target.value)} placeholder="Masukkan Room" />
                                    </div>
                                    {
                                        validation.room &&
                                            <div className="alert alert-danger">
                                                {validation.room}
                                            </div>
                                    }

                                    <div className="form-group mb-3">
                                        <label className="form-label fw-bold">DIVISION</label>
                                        <textarea className="form-control" rows={3} value={division} onChange={(e) => setDivision(e.target.value)} placeholder="Masukkan Division" />
                                    </div>
                                    {
                                        validation.division &&
                                            <div className="alert alert-danger">
                                                {validation.division}
                                            </div>
                                    }

                                    <button className="btn btn-primary border-0 shadow-sm" type="submit">
                                        SIMPAN
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // {/* </Layout> */}
    );

}

export default SantriCreate

