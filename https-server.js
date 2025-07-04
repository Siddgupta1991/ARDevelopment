const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Create self-signed certificate (for development only)
const options = {
    key: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7VJTUt9Us8cKB
wQNfFNQjH4nNIEGNxhXgOGTzJ7ZG3+hnDzOUANPHwWJJlvZTm+KzWR0XHNE5HNjb
nqTFZD9EYrWmwJz6oQ5m5z5XKaKJC5XzAW2VVBR4YNlPQqJ6vG0KpZEhE3DAr8vD
1wlxcTEpYfKRGNlM9lHnp3dKP6Rm3z3X0XnKgX5vX0lSLlGK6VzJZzm+XCeZLJHm
JGQjV6E7R1z2vD9W9w8Z5X1R8nP6LlGrO5g8a5pZKW4C6g9P6Rm3z3X0XnKgX5v
X0lSLlGK6VzJZzm+XCeZLJHmJGQjV6E7R1z2vD9W9w8Z5X1R8nP6LlGrO5g8a5p
ZKW4C6g9PAgMBAAECggEBAKtmOUFnHfvaNISkqyeMI+LO7NNhlhv3eN5tS1ZjN4F
pZg8zKVUHNUXSVPWq1s3K0zxQYxaE8i2I7kPYa8J9f1J0GJtQe6jdFjHjnJwG8j
vGwPpZ9p0YX1zJ5KRLtdVy2L1L7IZHQH7Gk1K1F8pEJEGYx5Z5W7nS2Q6E6Y3d5
U1h8E2VZGpJeUjZKNhZ5d3F0q8Y6LZw5l5K1K8nV5JKJjV5Y5NhZ5d3F0q8Y6LZ
w5l5K1K8nV5JKJjV5Y5NhZ5d3F0q8Y6LZw5l5K1K8nV5JKJjV5Y5NhZ5d3F0q8Y6
LZw5l5K1K8nV5JKJjV5Y5QKBgQDklyCTbhv5KQd3jK5Y5QKBgQDklyCTbhv5KQd3
-----END PRIVATE KEY-----`,
    cert: `-----BEGIN CERTIFICATE-----
MIIDXTCCAkWgAwIBAgIJAKoK/OvFzPbYMA0GCSqGSIb3DQEBCwUAMEUxCzAJBgNV
BAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBX
aWRnaXRzIFB0eSBMdGQwHhcNMTkwNjEwMTIwMDAwWhcNMjkwNjA3MTIwMDAwWjBF
MQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UECgwYSW50
ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
CgKCAQEAu1SU1L7VLPHCgcEDXxTUIx+JzSBBjcYV4Dhk8ye2Rt/oZw8zlADTx8Fi
SZb2U5vis1kdFxzRORzY256kxWQ/RGK1psCc+qEOZuc+VymiiQuV8wFtlVQUeGDZ
T0Kierxt...
-----END CERTIFICATE-----`
};

// Use HTTP for simplicity (we'll add HTTPS later)
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Mobile access: http://192.168.29.71:${port}`);
});