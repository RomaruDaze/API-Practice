**日本語:**

これは開志専門職大学のAPI演習講義のレポートです。

- `root`のフォルダーはレポート４と５の成果物のフォルダーです。
- WEB PAGEやゲームを起動するためには、Private WEB Hostingが必要です。
- そこで、MAMPやApacheなどのサービスを利用して、起動する。
- MAMPを利用する場合、`root`のフォルダーをアプリケーションの`htdocs`のフォルダーに入れます。
- それで、MAMPを起動して、Web Browserに`「http://localhost:{port番号}/root/」`を入力して、WEBページが起動できます。
- アプリを正常に動くするためには、APIのファイル・pythonコードは起動するが必要です。
- 起動は、pythonのファイルのフォルダーのところで、ターミナルで`python3 -m uvicorn main:app --reload` を打つこと
- uvicornがないなら、`pip3 install uvicorn`が必要です。

**English:**

This is a report for the API Exercise lecture at Kaishi Professional University.

- The `root` folder contains the results of reports 4 and 5.
- To launch the WEB PAGE or game, Private WEB Hosting is required.
- Therefore, use services such as MAMP or Apache to launch.
- - **API Setup:**
- The API's file and Python code must be launched.
  
- **Launch Instructions:**
  - To start, navigate to the folder containing the Python file in the terminal.
  - Run the following command:
    ```
    python3 -m uvicorn main:app --reload
    ```

- **UVicorn Installation:**
  - If UVicorn is not installed, use the following command:
    ```
    pip3 install uvicorn
    ```
