import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle"></input>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea className="form-control" id="formEventBody"></textarea>
        </div>

        <button className="btn btn-primary">イベントを作成</button>
        <button className="btn btn-danger">全てのイベントを削除</button>
      </form>

      <h4>イベント一覧</h4>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default App;
