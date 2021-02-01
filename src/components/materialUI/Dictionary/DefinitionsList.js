import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableContainer, TableCell, Paper, TableRow, TableHead } from "@material-ui/core";
import { SearchInput } from "../SearchInput"
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles({
  table: {
    maxWidth: 700,
    width: 700,
    margin: 20,
    paddingTop: 20,
  },
});

export const DefinitionsList = ({ definitions, page, setPage }) => {
  const classes = useStyles();

  const [search, setSearch] = useState('');
  const [list, setList] = useState(definitions);
  const [isEmpty, setIsEmpty] = useState(false);

  const searchOnList = (value) => {
    if (list) {
      const filtred = list.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));
    
      setList(filtred);
      setIsEmpty(filtred.length === 0);
    }
  }

  const handleInputChange = (event) => {
    setIsEmpty(false);
    
    const { value } = event.target;
    setSearch(value);


    if (value === '') {
        setList(definitions);
    } else {
        searchOnList(value);
    }
  }

  const renderRows = () => {
     if (!list || isEmpty) {
        return <Row name={'Nie znalezniono artykułu'} />
      }

      return list.map((definition, index) => 
        <Row key={index} name={definition.name} explanation={definition.explanation} />
      );
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <Pagination count={4} color="primary" onChange={(_event, page) => setPage(page)} />
          </TableRow>
          <TableRow>
            <TableCell>
                <SearchInput value={search} isDisabled={!list} onChange={handleInputChange} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pojęcie</TableCell>
            <TableCell align="right">Definicja</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderRows()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}; 

const Row = ({ name, explanation }) => {
    return (
        <TableRow>
          <TableCell component="td" scope="row">{name}</TableCell>
          {explanation && <TableCell component="td" align="right">{explanation}</TableCell>}
        </TableRow>
    );
};