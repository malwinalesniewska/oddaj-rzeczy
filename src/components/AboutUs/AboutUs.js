import React, {Component} from 'react';
import './_AboutUs.scss';
import Decoration from "../Decoration/Decoration";

class AboutUs extends Component {
    render() {
        return (
            <section className='about_us'>
                <div className='about_us__left'>
                    <h2 className='about_us__title'>
                        O nas
                    </h2>
                    <Decoration/>
                    <p className='about_us__text'>
                        Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava
                        bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut.
                    </p>
                    <div className='about_us__sign'/>
                </div>
                <div className='about_us__right'/>
            </section>
        );
    }
}

export default AboutUs;