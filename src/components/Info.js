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
                <div><p>Icon</p></div>
                <div>
                  <p>{info.Scrip}</p>
                  <p>$234</p>
                </div>
                <div>
                  <p>iShares<span>By Bullock</span></p>
                  <p>S&P</p>
                  <p>US Equity</p>
                </div>
              </div>
              <div className="flex-div-2">
                <p>Quantity <span>${info.Quantity}</span></p>
                <p>Avg. Cost<span>${info.AvgCost}</span></p>
                <p>Invested Amt<span>${info['Invested Amount']}</span></p>
              </div>
              <div className="flex-div-3">
                <p>Market Value<span>${info['Invested Amount']}</span></p>
                <p>% of portfolio value <span>{info['% of Portfolio Value']}%</span></p>
                <p>bar</p>
              </div>
              <div className="flex-div-4">
                <p>Unrealized P/L<span>${info['Unrealized P&L']}</span></p>
                <p>% Return <span>{info['% Return']}%</span></p>
                <p>bar</p>
              </div>
              <div className="flex-div-5">
                <button>BUY</button>
                <button>SELL</button>
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