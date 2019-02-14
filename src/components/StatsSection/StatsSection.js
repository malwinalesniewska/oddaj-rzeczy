import React, {Component} from 'react';
import './_StatsSection.scss';
import SingleStat from './SingleStat/SingleStat';

class StatsSection extends Component {
    render() {
        return (
            <section className='stats_section'>
                <div className='stats_section__container'>
                    <SingleStat
                        number={10}
                        title='ODDANYCH WORKÓW'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed purus sit amet ante pharetra luctus.'
                    />
                    <SingleStat
                        number={5}
                        title='WSPARTYCH ORGANIZACJI'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed purus sit amet ante pharetra luctus.'
                    />
                    <SingleStat
                        number={7}
                        title='ZORGANIZOWANYCH ZBIÓREK'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed purus sit amet ante pharetra luctus.'
                    />
                </div>
            </section>
        );
    }
}

export default StatsSection;
