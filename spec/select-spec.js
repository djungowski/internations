//const ReactTestUtils = require('react-addons-test-utils');
//import ReactTestUtils from 'react-addons-test-utils'

// This is undefined. Yay.
const ReactTestUtils = React.addons.TestUtils;
const renderer = TestUtils.createRenderer();

describe('Select component tests', function() {
	beforeEach(function() {
		renderer.render(<Select />);
	});

    it('runs a test case', function() {

    });
});