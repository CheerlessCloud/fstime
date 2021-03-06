'use strict';
const os = require('os');

if (os.platform() === 'linux') {
  const statSync = require('./statSync');
  const utimesSync = require('./utimesSync');

  module.exports = {
    /**
     * Get object fs.stats
     * @param pathToFile
     * @return {*}
     */
    statSync,

    /**
     * Set access time to file, and modify time to file
     * @param pathToFile
     * @param {string|number} atime_nsec - access time (example: 1496671445880.493406 or 1496671445880493406)
     * @param {string|number} mtime_nsec - modify time (example: 1496671445880.493406 or 1496671445880493406)
     * @return {void}
     */
    utimesSync,
  };
} else {
  const fallback = require('./fallback');
  module.exports = fallback;
}
