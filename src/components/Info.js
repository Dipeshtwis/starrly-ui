import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import getInfosAction from '../actions/index';
import { API_ID, API_DATA } from '../api/api';

const Info = props => {
  const { getInfos, infos } = props;

  const fetchData = useCallback(() => {
  	Axios.get(`${API_ID}${API_DATA}`)
  	  .then(res => {
  	  	getInfos(res.data.data);
  	  })
  	  .catch(err => {
  	  	console.log(err);
  	  })
  }, [getInfos]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className = "container">
        {
          infos.map(info => (
            <div className="flex-cont">
              <div className="flex-div-1">
                <div>
                  <div className="hamburger">
                    <span />
                    <span />
                    <span className="last-bar" />
                  </div>
                </div>
                <div className="scrip-div">
                  <p>{info.Scrip}</p>
                  <p>$<span className="blue">{info.Price}</span></p>
                </div>
                <div>
                  <p className="green">iShares<span className="index black">By Bullock</span></p>
                  <p className='bg-text'>S&P</p>
                  <p>US Equity</p>
                </div>
              </div>
              <div className="flex-div-2">
                <p className="fix-wid grey">Quantity <span className="gap black">${info.Quantity}</span></p>
                <p className="fix-wid grey">Avg. Cost<span className="gap black">${info.AvgCost}</span></p>
                <p className="fix-wid grey">Invested Amt<span className="gap black">${info['Invested Amount']}</span></p>
              </div>
              <div className="flex-div-3">
                <p className="fix-wid">Market Value<span className="gap">${info['Invested Amount']}</span></p>
                <p className="sm-font fix-wid">% of portfolio value <span className="gap">{info['% of Portfolio Value']}%</span></p>
                <div className="myProgress">
                  <div className="myBar"></div>
                </div>
              </div>
              <div className="flex-div-4">
                <p className="fix-wid">Unrealized P/L<span className="gap">${info['Unrealized P&L']}</span></p>
                <p className="fix-wid">% Return <span className="gap">{info['% Return']}%</span></p>
                <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
              </div>
              <div className="flex-div-5">
                <button className="btn">BUY</button>
                <div>
                  <button className="btn">SELL</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

Info.defaultProps = {
  infos: [],
};

const mapStateToProps = state => ({
  infos: state.infos,
});

const mapDispatchToProps = dispatch => ({
  getInfos: infos => dispatch(getInfosAction(infos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);