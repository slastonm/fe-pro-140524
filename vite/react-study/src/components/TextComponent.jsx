import React from 'react';
import PropTypes from 'prop-types';

TextComponent.propTypes = {
    title:PropTypes.string,
    text:PropTypes.string
}
TextComponent.defaultProps ={
    title:'PropTypes.string h1',
    text:'PropTypes.string p'
}

function TextComponent(props) {
    return (
        <div>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.text}
            </p>
        </div>
    );
}

export default TextComponent;