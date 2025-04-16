import {defineConfig} from "orval"

export default defineConfig({
    api: {
        input: 'http://localhost:5555/docs/json',
        output: {
            target: './src/http/api.ts',
            client: 'fetch',
            httpClient: 'fetch',
            clean: true,
            baseUrl: 'http://localhost:5555',
            override: {
                fetch: {
                    includeHttpResponseReturnType: false
                }
            }
        }
    }
})