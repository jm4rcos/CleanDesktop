import React from 'react';
import { StyledInput, SearchButton } from './styles';
import { FiSearch } from 'react-icons/fi'

export const Input = ({ onClick, onChange, width, height, type, value, placeholder, ...rest }) => {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: width
      }}>
        <StyledInput
          type={type}
          value={value}
          placeholder={placeholder}
          height={height}
          onChange={onChange}
          {...rest}
        />
        {type === 'search' && (
            <SearchButton width={width} height={height} onClick={onClick}>
                <FiSearch size={26}/>
            </SearchButton>
        )}
      </div>
    );
}