from lib import db;

with open('init.sql', 'r') as sql_file:
    sql_script = sql_file.read()
    conn, cur = db.get();
    cur.executescript(sql_script)
    conn.commit()
    conn.close()