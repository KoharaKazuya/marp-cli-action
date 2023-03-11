FROM marpteam/marp-cli:v2.4.0

USER root
WORKDIR /github/workspace

COPY fontconfig.xml /home/marp/.cli-action/
COPY package.json package-lock.json /home/marp/.cli-action/
RUN cd /home/marp/.cli-action/ && npm ci
COPY entrypoint.js /home/marp/.cli-action/

ENTRYPOINT ["/home/marp/.cli-action/entrypoint.js"]
CMD []
