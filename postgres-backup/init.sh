#!/bin/bash
gzip /app/db/dump.sql.gz | psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f