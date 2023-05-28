import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@avaya/neo-react";

export const TwoTabCarousel = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(1);
    const onTabChange = (newIndex: number) => {
        console.log(`tab changed to ${newIndex}`);
        setActiveTabIndex(newIndex);
    };
    return (
        <div style={{ height: "200px", marginBottom: "20px"}}>
            <h1>Two Tab Carousel</h1>
            <Tabs
                hasCarousel={true}
                onTabChange={onTabChange}
                leftCarouselButtonAriaLabel="previous tab"
                rightCarouselButtonAriaLabel="next tab"
            >
                <TabList>
                    <Tab id="tab1" icon="settings">
                        Tab1
                    </Tab>
                    <Tab id="tab2" icon="chat" dir="rtl">
                        Tab2
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <h2>content1</h2>
                        <p>paragraph 1</p>
                    </TabPanel>
                    <TabPanel>content 2</TabPanel>
                </TabPanels>
            </Tabs>
            <hr />
            <p>0 based active Tab index is {activeTabIndex}</p>
        </div>
    );
}