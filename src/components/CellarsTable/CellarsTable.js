import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { LEFT_ARROW, RIGHT_ARROW } from '../../assets/images';
import { IMAGE } from '../../Constant/getImages';
import './cellarstable.css';

const CellarsTable = ({ isNext }) => {
  const countPerPage = 7;
  const [start, setstart] = useState(0);
  const [end, setend] = useState(countPerPage);
  const current = end / countPerPage;
  const total = Math.ceil(IMAGE.length / countPerPage);

  const handleNextClick = () => {
    setstart((prev) => prev + countPerPage);
    setend((prev) => prev + countPerPage);
  };
  const handlePreviousClick = () => {
    setstart((prev) => prev - countPerPage);
    setend((prev) => prev - countPerPage);
  };
  return (
    <>
      <div id="cellars-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th className="heading">Cellar Value</th>
              <th className="heading">Cellar Bottles</th>
              <th className="heading">ID</th>
            </tr>
          </thead>
          <tbody>
            {IMAGE.slice(start, end).map((i, ind) => {
              return (
                <>
                  <tr>
                    <td className="number-image">
                      <p className="mb-0 ref-num">{ind + 1 + start}</p>
                      <img alt="cellers" src={i.img} className="" />
                    </td>

                    <td className="position-relative td-width">
                      <p className="mb-0 heading-ans alignText">$40,154</p>
                    </td>
                    <td className="position-relative td-width">
                      <p className="mb-0 heading-ans alignText">2 Bottles</p>
                    </td>
                    <td className="position-relative td-width">
                      <p className="mb-0 heading-ans alignText">0x0135499230513567</p>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
      {isNext ? (
        <div className="d-flex justify-content-between">
          <button onClick={handlePreviousClick} className="prevNext" disabled={start === 0}>
            <img src={RIGHT_ARROW} alt="left_arrow" className="mr-3" />
            Prev
          </button>
          <button className="prevNext" onClick={handleNextClick} disabled={current === total}>
            Next
            <img src={LEFT_ARROW} alt="right_arrow" className="ml-3" />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default CellarsTable;
