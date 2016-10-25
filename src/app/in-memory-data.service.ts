import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Record } from './records/shared/record.model';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let records: Record[] = [
            { id: 1, title: 'Diabolica' },
            { id: 2, title: 'Primal Fear' },
            { id: 3, title: 'Legendary Tales' },
            { id: 4, title: 'Glory To The Brave' },
            { id: 5, title: 'Rust In Peace' },
        ];

        return { records };
    }
}
