import img from './../img/ja.jpg';
import {FaTrash} from 'react-icons/fa';

const Item = ({item, deleteItem}) => {
    return (
        <div className="col-sm-10">
            <br />
            <div className="row item">
                <div className="col-sm-3">
                    <img src={img} alt="img" className="img-fluid rounded p-0"/>
                </div>
                <div className="col-sm-8">
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                     <small>{item.time}</small>
                </div>
                <div className="col-sm-1 align-self-center p-2 text-center">
                    <FaTrash
                        style={{color: '#D4D4DB', cursor:'pointer'}}
                        onClick={(e) => deleteItem(item.id)}
                    />
                </div>
            </div>
            <br />
        </div>
    )
}

export default Item
