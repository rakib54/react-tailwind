import React from 'react';

const ImageCard = ({image}) => {
    console.log(image);
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={image.webformatURL} alt="" />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">Photo by me</div>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;