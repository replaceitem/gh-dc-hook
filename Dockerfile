FROM denoland/deno:alpine
EXPOSE 3000
WORKDIR /app


COPY . .
RUN deno install --entrypoint src/main.ts

USER deno

CMD ["deno", "run", "--allow-net", "--allow-env", "--cached-only", "src/main.ts"]