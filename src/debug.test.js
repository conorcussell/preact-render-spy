const {h} = require('preact');

const {shallow, deep} = require('./preact-render-spy');

const Simple = () => <div>Hello?</div>;

const Wrapper = () => <div>Test <Simple /></div>;

it('returns a string representation', () => {
  const context = shallow(<Simple />);
  expect(context.debug()).toBe('<div>Hello?</div>');
});

it('works with shallow rendering', () => {
  const context = shallow(<Wrapper />);
  // todo: why is matching whitespace so hard?
  expect(context.debug()).toBe(`<div>
  Test
  <Simple />
</div>`);
});

it('works with deep rendering', () => {
  const context = deep(<Wrapper />);
  // todo: why is matching whitespace so hard?
  expect(context.debug()).toBe(`<div>
  Test
  <div>Hello?</div>
</div>`);
});