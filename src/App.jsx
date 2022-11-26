import "./App.css";
import table from "./forecast";
function App() {
  return (
    <div className="App">
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">
          ⚽ FIFA World Cup Qatar 2022 Forecast
        </a>
      </div>
      <div className="alert shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">仅供娱乐，请勿当真。</h3>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>序号</th>
              <th>时间</th>
              <th>小组</th>
              <th>比赛</th>
              <th>预测</th>
              <th>结果</th>
            </tr>
          </thead>
          <tbody>
            {table.map((race) => {
              return (
                <tr>
                  <th>{race.no}</th>
                  <td>{race.time}</td>
                  <td>{race.group}</td>
                  <td>{race.title}</td>
                  <td>{race.forecast}</td>
                  <td>
                    {race.result === 0 ? "⌛" : race.result === 1 ? "✅" : "❌"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <img
              width={100}
              src="https://upload.wikimedia.org/wikipedia/fr/e/e3/2022_FIFA_World_Cup.svg"
              alt=""
            />
            <p>
              <a href="https://www.kaggle.com/code/sslp23/predicting-fifa-2022-world-cup-with-ml/notebook">
                Algorithm code
              </a>
              <br />
              Enjoy.
            </p>
          </div>
          {/* made by https://github.com/zcyc */}
        </footer>
      </div>
    </div>
  );
}

export default App;
