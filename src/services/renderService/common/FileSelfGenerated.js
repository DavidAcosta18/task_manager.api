module.exports = class FileSelfGenerated {
  constructor(data) {
    this.forceDownload = data.forceDownload;
    this.filename = data.filename;
    this.headers = data.headers || [];
    this.mime = data.mime;
    this.stream = data.stream;
  }

  getHeaders() {
    return [
      { key: 'Content-type', value: this.mime },
      {
        key: 'Content-disposition',
        value: `${this.forceDownload ? 'attachment' : 'inline'}; filename="${this.filename}"`,
      },
      ...this.headers,
    ];
  }

  toBuffer() {
    return new Promise((resolve, reject) => {
      const buffer = [];

      this.stream.on('data', (chunk) => buffer.push(chunk));
      this.stream.on('end', () => resolve(Buffer.concat(buffer)));
      this.stream.on('error', (err) => reject(err));
    });
  }
};
