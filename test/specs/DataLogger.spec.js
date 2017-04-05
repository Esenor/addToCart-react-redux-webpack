require('jsdom-global/register');
var React = require('react');
var { mount } = require('enzyme');
var expect = require('chai').expect;
var DataLogger = require('../../src/components/widgets/DataLogger.jsx');

/**
 * rawData sample for testing
 * @type {Object}
 */
const rawData = {
  key: 42,
  message: 'Lorem ipsum en dolo del assarim'
};

/**
 * Testing DataLogger components
 */
describe('Testing DataLogger components', () => {
  /**
   * Testing render method
   */
  describe('Testing render method', () => {
    /**
     * Should render toggle <button/>
     */
    it('should render toggle <button/>', () => {
      const wrapper = mount(<DataLogger rawData={rawData} />);
      expect(wrapper.find('button')).to.have.length(1);
    });
    /**
     * Should not render <pre/> if display equal false
     */
    it('should not render <pre/> if display equal false', () => {
      const wrapper = mount(<DataLogger rawData={rawData} />);
      wrapper.setState({
        display: false
      });
      expect(wrapper.find('pre')).to.have.length(0);
    });
    /**
     * Should render <pre/> if display equal true
     */
    it('should render <pre/> if display equal true', () => {
      const wrapper = mount(<DataLogger rawData={rawData} />);
      wrapper.setState({
        display: true
      });
      expect(wrapper.find('pre')).to.have.length(1);
    });
  });
  /**
   * Testing props data
   */
  describe('Testing props data', () => {
    /**
     * Should set the props value to the container if rawdata is set
     */
    it('should set the props value to the container if rawdata is set', () => {
      const wrapper = mount(<DataLogger rawData={rawData} />);
      expect(wrapper.props().rawData).to.equal(rawData);
    });
    /**
     * Should set the default props value to the container if rawdata is not defined
     */
    it('should set the default props value to the container if rawdata is not defined', () => {
      const wrapper = mount(<DataLogger/>);
      const defaultPropsValue = {data: 'empty'};
      expect(wrapper.props().rawData).to.deep.equal(defaultPropsValue);
      expect(wrapper.props().rawData).to.not.equal(rawData);
    });
  });
});