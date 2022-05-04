# Spin up a postgres server with seeded data
FROM postgres:11.4 as db

WORKDIR /app

ENV POSTGRES_USER postgres
ENV POSTGRES_DB db

# Add the file from persistent storage to the context
ADD dump.sql.gz dump.sql.gz

COPY dump.sql.gz ./db/dump.sql.gz
COPY postgres-backup/init.sh /docker-entrypoint-initdb.d