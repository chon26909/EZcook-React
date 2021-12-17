import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const nameSearch = searchParams.get('name') || '';

    const [inputSearch, setInputSearch] = useState('');

    const handleSubmitSearch = (e) => { 

        e.preventDefault()

        if (inputSearch) {
            setSearchParams({ name: inputSearch })
        }
    }

    const onChangeInputSearch = (e) => {  

         setInputSearch(e.target.value)

         setSearchParams({ name: e.target.value })
    }

    return (
        <div className='container'>
            <div className='pt-5'>
                <Form onSubmit={handleSubmitSearch}>
                    <Form.Group className="mb-3" controlId="searchInput">
                        <Form.Control type="text" value={nameSearch} onChange={onChangeInputSearch} placeholder="กังหันลมเขายายเที่ยง" />
                    </Form.Group>
                    <Button variant="primary" type='submit'>ค้นหา</Button>
                </Form>
            </div>
            <div className='mt-3'>
                ผลลัพธ์การค้นหา : &nbsp;{nameSearch ? nameSearch : ''}
            </div>

        </div>
    )
}

export default SearchPage;
