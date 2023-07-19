import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DisneyCategory from './DisneyCategory';
import FrozenCategory from './FrozenCategory';
import AnimationCategory from './AnimationCategory';

const Categories = () => {
    return (
        <Tabs className="mx-4">
            <TabList>
                <Tab>Disney princes</Tab>
                <Tab>Frozen dolls</Tab>
                <Tab>Animation characters</Tab>
            </TabList>

            <TabPanel>
                <DisneyCategory />
            </TabPanel>
            <TabPanel>
                <FrozenCategory />
            </TabPanel>
            <TabPanel>
                <AnimationCategory />
            </TabPanel>
        </Tabs>
    );
};

export default Categories;