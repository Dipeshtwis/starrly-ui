const Info = props => {
  return (
    <>
      <div className = "container">
        <div className="flex-cont">
          <div className="flex-div-1">
            <div><p>Icon</p></div>
            <div>
              <p>ITOT</p>
              <p>$234</p>
            </div>
            <div>
              <p>iShares<span>By Bullock</span></p>
              <p>S&P</p>
              <p>US Equity</p>
            </div>
          </div>
          <div className="flex-div-2">
            <p>Quantity <span>150</span></p>
            <p>Avg. Cost<span></span></p>
            <p>Invested Amt<span></span></p>
          </div>
          <div className="flex-div-3">
            <p>Market Value<span>$945</span></p>
            <p>% of portfolio value <span>40%</span></p>
            <p>bar</p>
          </div>
          <div className="flex-div-4">
            <p>Unrealized P/L<span>$2805</span></p>
            <p>% Return <span>10%</span></p>
            <p>bar</p>
          </div>
          <div className="flex-div-5">
            <button>BUY</button>
            <button>SELL</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info;