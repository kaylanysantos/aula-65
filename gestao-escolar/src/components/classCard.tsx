import IClass from "../interfaces/IClass";

interface IclassCardProps {
    Sala: IClass;
}

function ClassCard( {Sala}: IclassCardProps ) {
    return(
        <div>
            <div>
              <p>{Sala.students}/{Sala.capacity}</p>
              <strong>{Sala.name}</strong>
            </div>

            <div>
              <p>{Sala.day} - {Sala.hour}</p>
            </div>
          </div>
    )
}

export default ClassCard;