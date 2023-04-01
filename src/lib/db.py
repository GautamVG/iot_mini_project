import sqlite3

def get():
    conn = sqlite3.connect('../../../db');
    return conn, conn.cursor();

def execute(sql):
    conn = sqlite3.connect('../../../db');
    cur = conn.cursor();
    cur.execute(sql);
    conn.close();