//const ReactTestUtils = require('react-addons-test-utils');
//import ReactTestUtils from 'react-addons-test-utils'
const ReactTestUtils = React.addons.TestUtils;
console.log(React.addons);
console.log(ReactTestUtils);
const renderer = TestUtils.createRenderer();

describe('Select component tests', function() {
	beforeEach(function() {
		renderer.render(<Select />);
	});

    it('runs a test case', function() {

    });
});