import * as React from 'react';
import { useState, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { NoContent, Tabs, TabList, Tab, TabPanels, TabPanel, Sheet, Table, Checkbox } from '@avaya/neo-react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Composer-module_wrapper__4VI6q {\n  font-family: \"Nunito Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.Composer-module_logo__O-doI {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.Composer-module_title__1PJbo {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n  padding: 0;\n}\n";
var styles = {"wrapper":"Composer-module_wrapper__4VI6q","logo":"Composer-module_logo__O-doI","title":"Composer-module_title__1PJbo"};
styleInject(css_248z);

const NoContentAgent = () => {
    const agentIconName = "agent";
    return jsxs("div", { style: { height: "500px" }, children: [jsx("h1", { children: "NoContent" }), jsx(NoContent, { icon: agentIconName, text: "Agent has no content" })] });
};

const TwoTabCarousel = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(1);
    const onTabChange = (newIndex) => {
        console.log(`tab changed to ${newIndex}`);
        setActiveTabIndex(newIndex);
    };
    return (jsxs("div", { style: { height: "200px", marginBottom: "20px" }, children: [jsx("h1", { children: "Two Tab Carousel" }), jsxs(Tabs, { hasCarousel: true, onTabChange: onTabChange, leftCarouselButtonAriaLabel: "previous tab", rightCarouselButtonAriaLabel: "next tab", children: [jsxs(TabList, { children: [jsx(Tab, { id: "tab1", icon: "settings", children: "Tab1" }), jsx(Tab, { id: "tab2", icon: "chat", dir: "rtl", children: "Tab2" })] }), jsxs(TabPanels, { children: [jsxs(TabPanel, { children: [jsx("h2", { children: "content1" }), jsx("p", { children: "paragraph 1" })] }), jsx(TabPanel, { children: "content 2" })] })] }), jsx("hr", {}), jsxs("p", { children: ["0 based active Tab index is ", activeTabIndex] })] }));
};

const AdvancedTable = () => {
    const columns = [
        {
            Header: "name header",
            accessor: "name"
        },
        {
            Header: "other header",
            accessor: "other"
        }
    ];
    const [data, setData] = useState([
        { id: 1, name: "sir Fred", other: "Lorem Ipsum" },
        { id: 2, name: "sir Daniel", other: "Lorem Ipsum" },
        { id: 3, name: "madam Tif", other: "Lorem Ipsum" },
        { id: 4, name: "madam Hailey", other: "Lorem Ipsum" },
        { id: 5, name: "intersex Alex", other: "Lorem Ipsum" },
        { id: 6, name: "androgynous Skyler", other: "Lorem Ipsum" },
        { id: 7, name: jsx("a", { href: "#frank", children: "fancy Frank" }), other: "Lorem Ipsum" }
    ]);
    return (jsxs("div", { children: [jsx("h1", { children: "Table" }), jsx(Sheet, { title: "Example Simple Table", children: jsx(Table, { columns: columns, data: data, handleRefresh: () => {
                        setData(data.slice(1));
                    } }) }), jsx(Sheet, { title: "Example Selectable Table", children: jsx(Table, { columns: columns, data: data, selectableRows: "single", handleCreate: () => alert("create"), handleEdit: () => alert("edit"), handleDelete: () => alert("delete"), handleRefresh: () => {
                        setData(data.slice(1));
                    } }) })] }));
};

const TwoCheckboxes = () => {
    return (jsxs("main", { className: "App", children: [jsx("h1", { children: "Checkbox" }), jsx(Checkbox, { name: "example", value: "1", children: "example label 1" }), jsx(Checkbox, { name: "example", value: "2", defaultChecked: true, children: "example label 2" })] }));
};

var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 85,
    height: 65,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fill: "#cc0003",
    d: "M0 0h52.722L85 64.557H0V0z"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M25.2 38.722h8.759l1.427 3.421H23.558l-1.891 3.938H16.44l12.951-25.909h3.621l12.951 25.909h-5.209L31.212 26.07 25.2 38.722z"
  })));
};

const Composer = ({ text }) => (jsxs("div", { children: [jsx("header", { children: jsxs("div", { className: styles.wrapper, children: [jsx("div", { className: styles.logo, children: jsx(SvgLogo, {}) }), jsx("h1", { className: styles.logo, children: text })] }) }), jsx(NoContentAgent, {}), jsx(TwoTabCarousel, {}), jsx(AdvancedTable, {}), jsx(TwoCheckboxes, {})] }));

class WCHeader extends HTMLElement {
    rootForReactChild;
    connectedCallback() {
        this.rootForReactChild = createRoot(this);
        this.rootForReactChild.render(createElement(Composer, { text: "Using Neo React inside an Element" }));
    }
    disconnectedCallback() {
        this.rootForReactChild.unmount();
    }
}
customElements.define("wc-header", WCHeader);
//# sourceMappingURL=index.es.js.map
