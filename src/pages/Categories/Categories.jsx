import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DisneyCategory from './DisneyCategory';
import FrozenCategory from './FrozenCategory';
import AnimationCategory from './AnimationCategory';

const Categories = () => {
    return (
        <div>
            <p className='text-4xl text-center font-bold text-slate-700 mt-5 mb-3'>Categories</p>
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
        </div>
    );
};

export default Categories;