import React from 'react'
import PropTypes from 'prop-types'

import StyledTabble from './styled/StyledTabble'
import StyledHead from './styled/StyledHead'
import StyledHeadRow from './styled/StyledHeadRow'
import StyledHeadCell from './styled/StyledHeadCell'
import StyledBody from './styled/StyledBody'
import StyledRow from './styled/StyledRow'
import StyledCell from './styled/StyledCell'

const Table = ({
  headers,
  data,
}) => {
  return (
    <StyledTabble>
      {
        console.log("TCL: data", data),
        console.log("TCL: data", data.map(d => (headers.map(h => (d[h.dataKey])))))
      }
      <StyledHead>
        <StyledHeadRow>
          {headers.map(item => (
            <StyledHeadCell key={`${item.label}${item.formatter}`}>
              {item.label}
            </StyledHeadCell>
          ))}
        </StyledHeadRow> 
      </StyledHead>
      <StyledBody>
        {data.map(item => (
          <StyledRow key ={item._id}>
            {headers.map(h => (
              <StyledCell key={`${item._id}${h.dataKey}`}>
                {item[h.dataKey]}
              </StyledCell>
            ))}
          </StyledRow>
        ))}
      </StyledBody>
    </StyledTabble>
  )
}

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array,
}

export default Table;
