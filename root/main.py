from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Any
import sqlite3

app = FastAPI()

class Word(BaseModel):
    player: str

def db_connection(database_name):
    try:
        conn = sqlite3.connect(database_name)
        return conn
    except sqlite3.Error as e:
        print(e)
        return None

@app.get("/player/{param}/{level}", response_model=Any)
def get_player_param(param:str, level:str):
    conn = db_connection("player.sqlite")
    cursor = conn.cursor()
    
    cursor.execute(f"SELECT {param} FROM player WHERE id=?",(level,))
    player_param = cursor.fetchall()

    if not player_param:
        raise HTTPException(status_code=404, detail="No player names found")

    return player_param[0][0]


#ENEMY API

@app.get("/enemy/{param}/{enemy_name}", response_model=Any)
def get_enemy_param(param: str, enemy_name: str):
    conn2 = db_connection("enemy.sqlite")
    cursor2 = conn2.cursor()
    
    cursor2.execute(f"SELECT {param} FROM enemy WHERE name=?", (enemy_name,))
    enemy = cursor2.fetchall()

    if not enemy:
        raise HTTPException(status_code=404, detail=f"ERROR")

    return enemy[0][0]


#SAVE DATA API

##newgame
@app.patch("/savedata/newgame/{param}/{value}", response_model=Any)
def newgame_savedata(param: str, value: str or int):
    conn3 = db_connection("savedata.sqlite")
    cursor3 = conn3.cursor()
    
    cursor3.execute(f"UPDATE savedata SET {param}=?", (value,))
    conn3.commit()

    cursor3.execute(f"SELECT {param} FROM savedata")
    updated_value = cursor3.fetchone()[0]

    return updated_value

@app.delete("/savedata/newgame/delete", response_model=Any)
def newgame_savedata_delete():
    conn6 = db_connection("savedata.sqlite")
    cursor6 = conn6.cursor()
    cursor6.execute(f"DELETE FROM savedata where id !=0;",)
    conn6.commit()

    return {"message":"Delete successful"}

@app.get("/savedata/newgame/saveindex", response_model=Any)
def newgame_savedata_saveindex():
    conn7 = db_connection("savedata.sqlite")
    cursor7 = conn7.cursor()
    cursor7.execute(f"SELECT MAX(id) FROM savedata",)
    data = cursor7.fetchall()[0][0]
    conn7.commit()

    return data

@app.get("/savedata/continue/{param}/{id}", response_model=Any)
def continue_savedata(param: str, id: int):
    conn4 = db_connection("savedata.sqlite")
    cursor4 = conn4.cursor()
    
    cursor4.execute(f"SELECT {param} FROM savedata WHERE id=?",(id,))
    data = cursor4.fetchall()[0][0]

    return data


@app.post("/savedata/save/{id}/name={name}&level={level}&area={area}&exp={exp}&key={key}&mkey={mkey}&potion={potion}&kcount={kcount}&hour={hour}&minute={minute}&second={second}", response_model=Any)
def continue_savedata(name: str, id,level,area,exp,key,mkey,potion,kcount,hour,minute,second: int):
    conn5 = db_connection("savedata.sqlite")
    cursor5 = conn5.cursor()
    
    cursor5.execute(f"INSERT INTO savedata(id,player_name,player_level,area_level,player_exp,key,mkey,potion,kcount,hour,minute,second) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",(id,name,level,area,exp,key,mkey,potion,kcount,hour,minute,second))
    conn5.commit()
    return {"message": "Saved succesful"}





#LEADERBOARD
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set this to your actual frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/leaderboard/showall/top", response_model=dict)
def get_leader_top():
    conn8 = db_connection("leaderboard.sqlite")
    cursor8 = conn8.cursor()

    cursor8.execute("SELECT * FROM leaderboard ORDER BY hour * 3600 + minute * 60 + second ASC LIMIT 10")
    data = cursor8.fetchall()

    result = []
    for row in data:
        formatted_time = ":".join([f"{str(val).zfill(2)}" for val in (row[4], row[5], row[6])])

        result.append({
            "name": row[1],
            "level": row[2],
            "kill_count": row[3],
            "time": formatted_time
        })

    return JSONResponse(content=result)

@app.get("/leaderboard/showall/log", response_model=dict)
def get_leader_log():
    conn8 = db_connection("leaderboard.sqlite")
    cursor8 = conn8.cursor()

    cursor8.execute("select * from logdata LIMIT 10")
    data = cursor8.fetchall()

    result = []
    for row in data:
        result.append({
            "logid": row[0],
            "lognum": row[1],
            "logdate": row[2]
        })

    return JSONResponse(content=result)

from datetime import datetime
@app.patch("/leaderboard/logsave", response_model=dict)
def increment_log_data():
    try:
        conn = db_connection("leaderboard.sqlite")
        cursor = conn.cursor()
        today_date = datetime.now().strftime("%Y-%m-%d")
        
        cursor.execute("SELECT logID, logNum FROM logdata WHERE logDate = ?", (today_date,))
        existing_record = cursor.fetchone()

        if existing_record is not None:
            log_id, log_num = existing_record

            new_log_num = log_num + 1
            cursor.execute("UPDATE logdata SET logNum = ? WHERE logDate = ?",(new_log_num, today_date))

        else:
            cursor.execute("INSERT INTO logdata (logDate, logNum) VALUES (?, 1)",(today_date,))
            cursor.execute("SELECT last_insert_rowid()")
            log_id = cursor.fetchone()[0]

        cursor.execute("UPDATE logdata SET logID = ? WHERE logDate <> ?", (log_id, today_date))
        conn.commit()
        conn.close()

        return {"message": "Update successfully"}

    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))



#NEWGAME
@app.post("/leaderboard/newgame/{name}", response_model=dict)
def get_leader_newgame(name: str):
    conn8 = db_connection("leaderboard.sqlite")
    cursor8 = conn8.cursor()

    cursor8.execute("SELECT * FROM leaderboard WHERE name=?", (name,))
    existing_record = cursor8.fetchone()

    if existing_record:
        raise HTTPException(status_code=400, detail="Name already exists in the leaderboard")

    cursor8.execute("INSERT INTO leaderboard(name) VALUES (?)", (name,))
    conn8.commit()

    return {"message": "Saved successfully"}

#WINGAME
@app.post("/leaderboard/wingame/name={name}&level={level}&killcount={killcount}&hour={hour}&minute={minute}&second={second}", response_model=dict)
def get_leader_wingame(name: str, level, killcount, hour, minute, second: int):
    conn8 = db_connection("leaderboard.sqlite")
    cursor8 = conn8.cursor()

    #Check whether the name exist or not
    cursor8.execute("SELECT * FROM leaderboard WHERE name=?", (name,))
    existing_record = cursor8.fetchone()

    if existing_record:
        existing_name, existing_level, existing_killcount, existing_hour, existing_minute, existing_second = existing_record[1:7]

        existing_level = int(existing_level)
        existing_killcount = int(existing_killcount)
        existing_hour = int(existing_hour)
        existing_minute = int(existing_minute)
        existing_second = int(existing_second)

        level = int(level)
        killcount = int(killcount)
        hour = int(hour)
        minute = int(minute)
        second = int(second)

        level_to_update = max(existing_level, level)
        killcount_to_update = max(existing_killcount, killcount)

        if existing_hour > hour or (existing_hour == hour and (existing_minute > minute or (existing_minute == minute and existing_second > second))):
            cursor8.execute("UPDATE leaderboard SET level=?, kcount=?, hour=?, minute=?, second=? WHERE name=?",
                            (level_to_update, killcount_to_update, hour, minute, second, name))
        else:
            cursor8.execute("UPDATE leaderboard SET level=?, kcount=? WHERE name=?",
                            (level_to_update, killcount_to_update, name))

        conn8.commit()
        return {"message": "Updated successfully"}

    else:
        #New player name
        cursor8.execute("INSERT INTO leaderboard(name, level, kcount, hour, minute, second) VALUES (?,?,?,?,?,?)",
                        (name, level, killcount, hour, minute, second))
        conn8.commit()
        return {"message": "Saved successfully"}

#TOP PLAYER
@app.get("/leaderboard/show_top/{param}", response_model=Any)
def get_top_name(param: int):
    conn8 = db_connection("leaderboard.sqlite")
    cursor8 = conn8.cursor()

    cursor8.execute("SELECT name, level, kcount, hour, minute, second FROM leaderboard")
    all_data = cursor8.fetchall()

    if all_data:
        sorted_data = sorted(all_data, key=lambda x: (x[3], x[4], x[5], -x[2]))

        if 1 <= param <= len(sorted_data):
            selected_name = sorted_data[param - 1][0]
            return selected_name
        else:
            return {"message": "Invalid position number"}
    else:
        return {"message": "No data available"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=7070, debug=True)
