import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
// import spinner from '../static/load.gif';
import Modal from 'react-overlays/Modal';
// import { TitleOutlined } from '@material-ui/icons';
import '../static/fontawesome.css';
import { getList } from '../features/api/apiAsync';
import { getTitle } from '../features/api/apiTitleAsync';

const Table = styled.table`
  background: black;
  border-radius: 3px;
  border-collapse: collapse;
  height: 320px;
  /* max-width: 1500px; */
  width: 80%;
  /* max-width: 500px; */
  top: 177px;
  /* left: 18%; */
  margin-left: 350px;
  margin-right: none;
  overflow-x: auto;
  position: relative;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
`;
const TableTd = styled.td`
  background: ${palette.gray[9]};
  padding: 20px;
  text-align: left;
  vertical-align: middle;
  width: 500px;
  font-weight: 300;
  font-size: 14px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #c1c3d1;
  text-align: center;
  &:hover {
    background-color: ${palette.gray[8]};
    cursor: pointer;
  }
`;

const TableTr = styled.tr`
  display: table;
  max-width: 1500px;
  /* border-bottom: 1px solid #c1c3d1; */
  color: ${palette.gray[5]};
  font-size: 14px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);

  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: none;
    /* color: blue; */
  }
`;
const TableTh2 = styled.th`
  color: #d5dde5;
  background: #1b1e24;
  /* border-bottom: 4px solid #9ea7af; */
  /* border-right: 1px solid #343a45; */
  font-size: 16px;
  font-weight: 100;
  padding: 24px;
  text-align: left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  width: 1500px;
  max-width: 1500px;
  text-align: center;
  &:first-child {
    border-top-left-radius: 15px;
  }
  &:last-child {
    border-top-right-radius: 15px;
    /* border-right: none; */
  }
`;

const TableBody = styled.tbody`
  overflow-y: auto;
  overflow-x: hidden;
  float: left;
  max-width: 1500px;
  height: 560px;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  &::-webkit-scrollbar {
    background-color: gray;
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6c5ce7;
    border-radius: 15px;
  }
`;

const TableHead = styled.thead`
  /* float: ; */
  /* width: 500px; */
`;

const DownButton = styled.button`
  position: relative;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  width: 100%;
  /* border-radius: 15px; */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  color: lightgray;
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 20px -10px lightblue;
    color: white;
    transition: all 0.5s ease-in-out;
  }
`;

const RandomlyPositionedModal = styled(Modal)`
  position: fixed;
  width: 820px;
  height: 420px;
  z-index: 1040;
  border: 0;
  outline: none;
  top: 40%;
  left: 40%;
  border-radius: 15px;
  margin-left: calc(400px / -2);
  margin-top: calc(400px / -2);
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
  background-color: ${palette.gray[8]};
  color: ${palette.gray[5]};
`;

const ModalWrapper = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Backdrop = styled('div')`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

const InlineTable = styled.div``;

const InlineTbody = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  float: left;
  height: 360px;
  &::-webkit-scrollbar {
    background-color: gray;
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6c5ce7;
    border-radius: 15px;
  }
`;

const InlineTd = styled(TableTd)`
  border-right: 1px solid ${palette.gray[8]};
  &:hover {
    background-color: ${palette.gray[7]};
    cursor: default;
  }
`;

const InlineTr = styled.div`
  display: table;
  width: 800px;
  /* border-bottom: 1px solid #c1c3d1; */
  color: ${palette.gray[5]};
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
  padding-bottom: 10px;
`;

const TiTypeList = () => {
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  const [count, setCount] = useState(7);
  // const [tcount, setTcount] = useState(7);
  const column2 = useSelector((state) => state.column2);
  const data = useSelector((state) => state.api);
  const data2 = useSelector((state) => state.apiTitle);
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(1);
  const [title, setTitle] = useState(null);
  // const [test, setTest] = useState(null);
  const renderBackdrop = (props) => <Backdrop {...props} />;

  const loadData = data2.filter(function (e) {
    return e.id <= count;
  });

  const countData = data.filter(function (e) {
    return e.info.id === num;
  });

  console.log(data);

  useEffect(() => {
    dispatch(getList());
    dispatch(getTitle());
    // data2();
  }, [dispatch]);

  return (
    <>
      <div>
        <Table>
          <TableHead>
            <TableTr>
              {column2.map((column) => (
                <TableTh2 key={column}>{column}</TableTh2>
              ))}
            </TableTr>
          </TableHead>
          <TableBody>
            {data2.length === 0
              ? // <img src={spinner} alt='spinner' />
                // <i class='fas fa-spinner fa-spin' />
                null
              : loadData.map(({ id, tid, title, description: desc }) => (
                  <TableTr
                    key={id}
                    onClick={() => {
                      setShow(true);
                      setTitle(title);
                      setNum(id);

                      // setSibal(data.filter((v) => v.info === id));
                      // console.log(sibal);
                    }}
                  >
                    <TableTd>{tid}</TableTd>
                    <TableTd>{title}</TableTd>
                    <TableTd>{desc.slice(0, 120) + '...'}</TableTd>
                    {/* <TableTd>{reg_date.substr(0, 16).replace('T', ' ')}</TableTd> */}
                    {/* <TableTd>{desc.substr(0, 50) + '...'}</TableTd> */}
                  </TableTr>
                ))}
            <DownButton
              onClick={(e) => {
                setCount(count + 5);
              }}
            >
              불러오기
            </DownButton>
          </TableBody>
        </Table>

        <RandomlyPositionedModal
          show={show}
          onHide={() => setShow(false)}
          renderBackdrop={renderBackdrop}
        >
          <ModalWrapper>
            {title}
            <InlineTable>
              <thead>
                <InlineTr>
                  <th>Type</th>
                  <th>Indicator</th>
                  <th>Date</th>
                </InlineTr>
              </thead>
              <InlineTbody>
                {data.length === 0 ? (
                  <i className='fas fa-spinner fa-spin' />
                ) : (
                  countData.map(
                    ({
                      indicator,
                      indicator_type: { indicator_name },
                      reg_date,
                    }) => (
                      <tr>
                        <InlineTd>{indicator_name}</InlineTd>
                        <InlineTd>{indicator.slice(0, 50)}</InlineTd>
                        <InlineTd>{reg_date.slice(0, 10)}</InlineTd>
                      </tr>
                    )
                  )
                )}
              </InlineTbody>
              {/* <DownButton
              onClick={() => {
                setTcount(tcount + 5);
              }}
            >
              불러오기
            </DownButton> */}
            </InlineTable>
          </ModalWrapper>
        </RandomlyPositionedModal>
      </div>
    </>
  );
};

export default TiTypeList;
