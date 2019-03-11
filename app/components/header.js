import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  padding: 6px;
  margin: 6px;
  background: #eee;
  border: 1px solid #999;
  border-radius: 5px;
`;

function Header() {
  return (
    <div>
      <h1>ListApp</h1>
      <NavBar>
        <a href="/">Add to list</a> | <a href="/list">View list</a>
      </NavBar>
    </div>
  );
}

export default Header;
