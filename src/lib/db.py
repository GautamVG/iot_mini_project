import sqlite3

db_file = "db";

def connect():
    conn = sqlite3.connect(db_file, detect_types=sqlite3.PARSE_DECLTYPES);
    conn.row_factory = sqlite3.Row;
    cur = conn.cursor();
    return conn, cur;


def query(sql, params = []):
    conn, cur = connect();
    res = cur.execute(sql, params);
    conn.commit();
    data = [dict(row) for row in res.fetchall()];
    cur.close();
    conn.close();
    return data;

def run_script(filepath):
    with open(filepath, 'r') as sql_file:
        sql_script = sql_file.read();
        conn, cur = connect();
        cur = conn.cursor();
        cur.executescript(sql_script);
        conn.commit();
        cur.close();
        conn.close();