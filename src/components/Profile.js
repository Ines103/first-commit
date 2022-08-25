import React, { useEffect, useState } from 'react';
import profilImg from '../profil.png'; //.. sont utlisés poir pouvoir sortir du dossier components
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Profile() {

    // state = {
    //     data :{} //objet qui esu une collection de 10 fake personnes avec leurs id
    // }
    const [data, setData] = useState([]); //setData va ramplacé le setState et data va ramplacer le state puisque nous sommes non plus dans le composant de type classe
    const {profileId} = useParams() //useParams est une fonction importé par react router qui nous permet de selectionnes de selement precis dans notre objet (comme ProfileId)
    console.log(profileId)


    // componentDidMount = () => { // cdm: est l'endroit ideale pour pouvoir faire des appels pour recuperer la data
    //   const data = this.props.match.params.profileId; //puisque c une claase, on a passé les props dans console.log en utilisant this.props // si c une fonction, on peut mettre props directement dans le parametre sans le this. 
    //   //pour pouvoir afficher le profileId, il faut aller dans l'objet match puis dans l'objet params 
    //   //c cette data qui nous permet d'afficher le id dans la page du profile







    // }

    useEffect(() => { //useEffect va ramplacé le componentDidMount : elle va faire le m fonctionnement=> afficher les donnés lors du chargement ou reload de la page
        let payload = {
            token: "j58P5YC31jPWIIrVuHlXeg",
            data: {
                name: "nameFirst",
                email: "internetEmail",
                phone: "phoneHome",
                _repeat: 10
            }
        };



      axios({
        method: "post", //utiliser la methode post
        url: "https://app.fakejson.com/q", //vers lequel nous allons chercher la data
        data: payload //la data en question qui est mite dans let
       }).then(resp => {

        console.log(resp.data[profileId]);
        setData(resp.data[profileId]); //sur notre resp, on accede a data qui est un array de 10 personnes: notre interet est le profileId //setData va changer notre state(data) automatiquement
        console.log(data);
        // this.setState ({
        //     data:  resp.data[data] //on peut acceder a l'information de la personne dont son id est 5 est le mettre dans le state qui va etre mis a jour
        // })

      });

    }, [])
    //les props vont etre recuperés au niveau de <Route>, puisque j'ai passé profile dans Route

    //por pouvoir acceder a ces donnés(mail, nom, tel) sachant que je l'ai a present dans mon state:=> pour pouvoir les recuperés:
    //au lieu d'utiliser setState achaquefois, je vais devoir faire le destructuring a chaque fois
    const { email, name, phone } = data;

    return (
        <div className='container mt-3'>
            <h1>Profile</h1>
            <img src={profilImg} alt="profile" />

            <ul className='list-group list-group-flush'>
                <li className="list-group-item"> <strong>Nom:</strong> {name}</li>
                <li className="list-group-item"> <strong>Email:</strong>  {email}</li>
                <li className="list-group-item"> <strong>Tel:</strong> {phone}</li>

            </ul>

        </div>
    )

}

export default Profile;
