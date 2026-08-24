import * as migration_20260820_124947 from './20260820_124947';
import * as migration_20260821_051723_add_accessories_and_featured from './20260821_051723_add_accessories_and_featured';

export const migrations = [
  {
    up: migration_20260820_124947.up,
    down: migration_20260820_124947.down,
    name: '20260820_124947',
  },
  {
    up: migration_20260821_051723_add_accessories_and_featured.up,
    down: migration_20260821_051723_add_accessories_and_featured.down,
    name: '20260821_051723_add_accessories_and_featured'
  },
];
