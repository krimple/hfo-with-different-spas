"use strict";

require("dotenv").config();
const logger = require("./logger");

const { OTEL_EXPORTER_OTLP_ENDPOINT, OTEL_SERVICE_NAME } = process.env;
console.log(`URL: ${OTEL_EXPORTER_OTLP_ENDPOINT}`);
console.log(`SERVICE NAME: ${OTEL_SERVICE_NAME}`);

const opentelemetry = require("@opentelemetry/sdk-node");

const {
    OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-http");
const {
    getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const {BatchSpanProcessor} = require("@opentelemetry/sdk-trace-base");

const sdk = new opentelemetry.NodeSDK({
    spanProcessor: new BatchSpanProcessor(
        new OTLPTraceExporter({
            url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
        })
    ),
    serviceName: process.env.OTEL_SERVICE_NAME,
    instrumentations: [getNodeAutoInstrumentations()]
});

logger.debug("Starting OpenTelemetry Node SDK");
sdk.start();

// make sure we flush last logs if terminating
process.on("SIGINT", () => {
    console.log("SDK server shutting down");
    sdk.shutdown().finally(() => process.exit(0));
});

console.log("Starting OpenTelemetry Node SDK");
module.exports = sdk;
