
import { HoneycombWebSDK } from '@honeycombio/opentelemetry-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';

const configDefaults = {
    ignoreNetworkEvents: true,
    // everybody gets a traceparent!
    propagateTraceHeaderCorsUrls: [ /.+/g ]
}

const sdk = new HoneycombWebSDK({
    // TODO externalize
    endpoint: "http://localhost:4318", // Send to EU instance of Honeycomb. Defaults to sending to US instance.
    debug: true, // Set to false for production environment.
    serviceName: 'vue-frontend', // Replace with your application name. Honeycomb uses this string to find your dataset when we receive your data. When no matching dataset exists, we create a new one with this name if your API Key has the appropriate permissions.
    instrumentations: [getWebAutoInstrumentations({
        // Loads custom configuration for xml-http-request instrumentation.
        '@opentelemetry/instrumentation-xml-http-request': configDefaults,
        '@opentelemetry/instrumentation-fetch': configDefaults,
        '@opentelemetry/instrumentation-document-load': configDefaults,
    })],
});

sdk.start();

