import { Button, TextField } from "@material-ui/core";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { HeaderWrapper, SearchBox, SearchWrapper } from './PageHeader.styles';

const PageHeader: React.FC = () => {
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const redirect = () => {
        if (searchQuery.length) {
            history.push(`/search/${searchQuery}`);
        }
    }

    const handleValueChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchQuery(event.target.value);
    }

    const handleClickEvent = () => {
        redirect();
    }

    const handleKeyDown = (event: { keyCode: number; }) => {
        if (event.keyCode === 13) { // Enter
            redirect();
        }
    }

    return (
        <HeaderWrapper>
            <SearchWrapper>
                <SearchBox>
                    <TextField
                        label="Search..."
                        value={searchQuery}
                        onChange={handleValueChange}
                        onKeyDown={handleKeyDown}
                    />
                    <Button
                        variant="outlined"
                        style={{ marginLeft: '1rem' }}
                        onClick={handleClickEvent}
                    >Search</Button>
                </SearchBox>
            </SearchWrapper>
        </HeaderWrapper>
    );
}

export default PageHeader;