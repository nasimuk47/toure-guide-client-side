/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OverviewTab from "./OverviewTab";
import OurPakage from "./OurPakage";
import TourGuider from "./TourGuider";

const TourismTab = () => {
    const [tabIndex, setTabIndex] = useState(0); // Set the default tab index

    return (
        <div>
            <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <OverviewTab></OverviewTab>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div>
                        <OurPakage></OurPakage>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div>
                        <TourGuider></TourGuider>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TourismTab;
