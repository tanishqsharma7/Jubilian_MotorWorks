"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";

const tabList = [
  "Welcome Text",
  "Our Terms",
  "Conditions",
  "your Privacy",
  "Information We Collect",
];
const TABS = [
  {
    title: "Welcome Text",
    content: (
      <div className="grids mb60">
        <h4 className="title">Welcome Text</h4>
        <p className="mb25">
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb25">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb0">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          mollis et sem sed sollicitudin. Donec non odio neque. Aliquam egestas
          sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Integer
          tristique elit lobortis purus bibendum, quis dictum metus mattis.
          Phasellus posuere felis sed eros porttitor mattis. Curabitur massa
          magna, tempor in blandit id, porta in ligula.din cursus. Ut et
          adipiscing erat. Curabitur this is a text link libero tempus congue.
        </p>
      </div>
    ),
  },
  {
    title: "Our Terms",
    content: (
      <div className="grids mb30">
        <h4 className="title">Our Terms</h4>
        <p className="mb25">
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb25">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          mollis et sem sed sollicitudin. Donec non odio neque. Aliquam
          hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque
          bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam
          tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a
          text link libero tempus congue.
        </p>
        <p className="mb0">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          mollis et sem sed sollicitudin. Donec non odio neque. Aliquam egestas
          sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Integer
          tristique elit lobortis purus bibendum, quis dictum metus mattis.
          Phasellus posuere felis sed eros porttitor mattis. Curabitur massa
          magna, tempor in blandit id, porta in ligula.din cursus. Ut et
          adipiscing erat. Curabitur this is a text link libero tempus congue.
        </p>
      </div>
    ),
  },
  {
    title: "Conditions",
    content: (
      <div className="grids mb60">
        <h4 className="title">Conditions</h4>{" "}
        <p className="mb25">
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb25">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb0">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          mollis et sem sed sollicitudin. Donec non odio neque. Aliquam egestas
          sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Integer
          tristique elit lobortis purus bibendum, quis dictum metus mattis.
          Phasellus posuere felis sed eros porttitor mattis. Curabitur massa
          magna, tempor in blandit id, porta in ligula.din cursus. Ut et
          adipiscing erat. Curabitur this is a text link libero tempus congue.
        </p>
      </div>
    ),
  },
  {
    title: "Your Privacy",
    content: (
      <div className="grids mb30">
        <h4 className="title">Our Privacy</h4>
        <p className="mb25">
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb0">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          mollis et sem sed sollicitudin. Donec non odio neque. Aliquam
          hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque
          bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam
          tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a
          text link libero tempus congue.
        </p>
      </div>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <div className="grids mb30">
        <h4 className="title">Informations We Collect</h4>
        <p className="mb25">
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula.
        </p>
        <p className="mb0">
          Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.Duis
          mollis et sem sed sollicitudin. Donec non odio neque. Aliquam
          hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque
          bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam
          tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a
          text link libero tempus congue.
        </p>
      </div>
    ),
  },
];

const Terms = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Tabs selectedIndex={activeIndex} onSelect={handleTabClick}>
      <div className="row">
        <div className="col-md-8 col-xl-9">
          <div className="terms_condition_grid">
            {TABS.map((tab, index) => (
              <TabPanel key={index}>{tab.content}</TabPanel>
            ))}
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-4 col-xl-3">
          <div className="terms_condition_widget">
            <div className="widget_list">
              <h5 className="title">Navigation</h5>

              <TabList className="list_details">
                {tabList.map((item, i) => (
                  <Tab className="single-list" key={i}>
                    {item}
                  </Tab>
                ))}
              </TabList>
            </div>
          </div>
        </div>
      </div>
    </Tabs>
  );
};

export default Terms;
