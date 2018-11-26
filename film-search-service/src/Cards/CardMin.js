/**
 * Created by Nadin on 26.11.2018.
 */
import React from 'react';
import avatar from '../img/min/avatar.jpg';
const cardMin = () => {
    return (
        <div className="card-group col-12 col-sm-4 mb-1 mb-sm-4 text-center">
            <div className="card _pointer _no-shadow-hover _no-pointer-hover mb-0">
                <div className="card-body">
                    <img class='' src={avatar} alt="" className="card-img"/>
                    <p className="card-text">
                      Аватар
                    </p>
                </div>
                <div className="card-footer">
                    <div className="nn_card__raiting"></div>
                    <div className="nn_card__year"></div>
                </div>
            </div>
        </div>
    );
};

export default cardMin;

