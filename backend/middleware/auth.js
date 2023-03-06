// *******************************************------------------------*************************************
//Importation de jsonwebtoken pour travailler avec le token de l'utilisateur
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        //Récupération du token dans le header Authorization (split --> récupère les éléments après l'espace du header)
        const token = req.headers.authorization.split(' ')[1];
        //Décodage du token
        const decodedToken = jwt.verify(token, 'sbfsbfoumbzYT’TPGBÇV(!TAUOVJIG`’àtuh)çbrhçtu!RQEIKGÉ(GU§,J’T,H!ZÇN)TUÉ’ÉÀVÀ7Y4B1+9§4U+Z’814RV&r93té68’y88(g719+7ççk+7à(4àç+9v(1&+v4c4xr’édt’7+1+’(7g+vy+§+*1’1+x7+1rc++5v22h97(ev2');
        //Extraction de l'ID utilisateur se trouvant dans le token
        const userId = decodedToken.userId;
        //Ajout de l'ID dans req.auth
        req.auth = {
            userId : userId
        };
        // Vérification --> l'id utilisateur de la requête et celui placer dans le token sont les mêmes
        // Renvoie une erreur en cas d'une authentification incorrect
        if(req.body.userId && req.body.userId !== userId){
            throw new Error(res.status(401).json({message : 'Id utilisateur non autorisé.'}));
        }else{
            next()
        }
    } catch(error) {
        res.status(401).json({error});
    }
};