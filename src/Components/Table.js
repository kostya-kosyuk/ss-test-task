import { Paper, TableRow, TableHead, TableCell, TableBody, CircularProgress, Button } from '@mui/material';

import { StyledButtonBox, StyledTable, StyledTableContainer, StyledBox } from '../StyledComponents';

import { getData, getSelectedColumns } from '../redux';
import { useSelector } from 'react-redux';

import { useMemo, memo } from 'react';
import { getDataByNames, getRows } from '../utils/dataFunctions';

export const MemoizedTable = memo(Table);

export function Table({ handleToggleModal }) {
    const data = useSelector(getData);
    const selectedColumns = useSelector(getSelectedColumns);

    const rows = useMemo(() => selectedColumns ? getRows(getDataByNames(selectedColumns, data)) : null, [data, selectedColumns]);

    return (
        <StyledBox>
            {rows
                ? (
                    <>
                        <StyledButtonBox>
                            <Button variant="contained" size='small' onClick={handleToggleModal}>Select Columns</Button>
                        </StyledButtonBox>
                        <StyledTableContainer component={Paper}>
                            <StyledTable aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        {selectedColumns.map((name) => <TableCell align="center" key={name}>{name}</TableCell>)}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            {Object.keys(row).map(keyName => <TableCell align='center' key={keyName}>{row[keyName]}</TableCell>)}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </StyledTable>
                        </StyledTableContainer>
                    </>
                )
                : <CircularProgress />
            }
        </StyledBox>
    );
}