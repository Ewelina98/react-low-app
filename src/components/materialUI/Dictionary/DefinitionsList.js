import React, { useState, useEffect } from "react";
import { Table, TableBody, TableContainer, TableCell, Paper, TableRow, TableHead, CircularProgress, Typography } from "@material-ui/core";
import { SearchInput } from "../SearchInput"
import { Pagination } from "@material-ui/lab";
import { fetchDefinitions } from "services/fetchDefinitions";

export const DefinitionsList = () => {
  const [search, setSearch] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const [page, setPage] = useState(1);
  const [definitions, setDefinitions] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    fetchDefinitions(page)
      .subscribe((presentables) => {
        setDefinitions(presentables);
        setList(presentables);
      });
  }, [page])

  const searchOnList = (value) => {
    if (list) {
      const filtred = list.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));
    
      setList(filtred);
      setIsEmpty(filtred.length === 0);
    }
  }

  const handleInputChange = (event) => {
    setList(definitions);
    setIsEmpty(false);
    
    const { value } = event.target;
    setSearch(value);
    if (value !== '') {
      searchOnList(value);
    }
  }

  const renderRows = () => {
     if (!list || list.length === 0 || isEmpty) {
        return <Row name={'Brak'} />
      }

      return list.map((definition, index) => 
        <Row key={index} name={definition.name} explanation={definition.explanation} />
      );
  }

  const onPageChange = (_event, _page) => setPage(_page);

  if (!definitions) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
                <SearchInput value={search} isDisabled={!list} onChange={handleInputChange} />
            </TableCell>
            <TableCell align="right" style={{ display: 'flex', flexGrow: 1 }}>
              <Pagination count={3} color="primary" onChange={onPageChange} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{'Pojęcie'}</TableCell>
            <TableCell align="right">{'Definicja'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderRows()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}; 

const Row = ({ name, explanation }) => (
  <TableRow>
    <TableCell component="td" scope="row">{name}</TableCell>
    {explanation && <TableCell component="td" align="left">{explanation}</TableCell>}
  </TableRow>
);