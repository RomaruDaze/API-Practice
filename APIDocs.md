Certainly! Here's the documentation with the response parts translated into Japanese:

### Player API

#### Get Player Parameter
- **Endpoint**: `/player/{param}/{level}`
- **Method**: `GET`
- **Parameters**:
  - `param` (path parameter): The parameter to retrieve for the player.
  - `level` (path parameter): The player's level.
- **Response**:
  - 要求されたプレイヤーパラメータを返します。

### Enemy API

#### Get Enemy Parameter
- **Endpoint**: `/enemy/{param}/{enemy_name}`
- **Method**: `GET`
- **Parameters**:
  - `param` (path parameter): The parameter to retrieve for the enemy.
  - `enemy_name` (path parameter): The name of the enemy.
- **Response**:
  - 要求された敵のパラメータを返します。

### Save Data API

#### New Game
- **Endpoint**: `/savedata/newgame/{param}/{value}`
- **Method**: `PATCH`
- **Parameters**:
  - `param` (path parameter): The parameter to update.
  - `value` (path parameter): The new value for the parameter.
- **Response**:
  - 更新された値を返します。

#### New Game Delete
- **Endpoint**: `/savedata/newgame/delete`
- **Method**: `DELETE`
- **Response**:
  - 削除が成功したことを示すメッセージを返します。

#### New Game Save Index
- **Endpoint**: `/savedata/newgame/saveindex`
- **Method**: `GET`
- **Response**:
  - savedataからの最大IDを返します。

#### Continue Save Data
- **Endpoint**: `/savedata/continue/{param}/{id}`
- **Method**: `GET`
- **Parameters**:
  - `param` (path parameter): 取得するパラメータ。
  - `id` (path parameter): savedataのID。
- **Response**:
  - 指定されたIDのデータを返します。

#### Continue Save Data (Save)
- **Endpoint**: `/savedata/save/{id}/name={name}&level={level}&area={area}&exp={exp}&key={key}&mkey={mkey}&potion={potion}&kcount={kcount}&hour={hour}&minute={minute}&second={second}`
- **Method**: `POST`
- **Parameters**:
  - 異なる属性のためのさまざまなパスパラメータ。
- **Response**:
  - 保存が成功したことを示すメッセージを返します。

### Leaderboard API

#### Show All - Top
- **Endpoint**: `/leaderboard/showall/top`
- **Method**: `GET`
- **Response**:
  - リーダーボードからのトッププレイヤーを返します。

#### Show All - Log
- **Endpoint**: `/leaderboard/showall/log`
- **Method**: `GET`
- **Response**:
  - リーダーボードからのログデータを返します。

#### Log Save
- **Endpoint**: `/leaderboard/logsave`
- **Method**: `PATCH`
- **Response**:
  - ログの更新が成功したことを示すメッセージを返します。

#### New Game
- **Endpoint**: `/leaderboard/newgame/{name}`
- **Method**: `POST`
- **Parameters**:
  - `name` (path parameter): プレイヤーの名前。
- **Response**:
  - 保存が成功したことを示すメッセージを返します。

#### Win Game
- **Endpoint**: `/leaderboard/wingame/name={name}&level={level}&killcount={killcount}&hour={hour}&minute={minute}&second={second}`
- **Method**: `POST`
- **Parameters**:
  - 異なる属性のためのさまざまなパスパラメータ。
- **Response**:
  - 更新が成功したことを示すメッセージを返します。

#### Show Top
- **Endpoint**: `/leaderboard/show_top/{param}`
- **Method**: `GET`
- **Parameters**:
  - `param` (path parameter): 位置番号。
- **Response**:
  - リーダーボードの指定された位置のプレイヤーを返します。

### 説明

- アプリケーションは、`player.sqlite`、`enemy.sqlite`、`savedata.sqlite`、および`leaderboard.sqlite`という名前のSQLiteデータベースを使用しています。これらのデータベースが存在し、適切に構成されていることを確認してください。
- アプリケーションは `http://127.0.0.1:7070/` で実行されます。必要に応じてホストとポートを調整してください。
- CORSはすべてのオリジンに対して有効です。展開に必要なように許可されるオリジンを調整してください。
