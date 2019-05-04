import React, {Component, Fragment} from 'react';
import './_SingleList.scss';


const NUMBER_OF_ITEMS_PER_PAGE = 3;

class SingleList extends Component {
    state = {
        currentPage: 1
    };

    goToPage = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    };

    render() {
        const {currentPage} = this.state;
        const {list} = this.props;

        const start = (currentPage - 1) * NUMBER_OF_ITEMS_PER_PAGE;
        const end = currentPage * NUMBER_OF_ITEMS_PER_PAGE;
        const elemsToDisplay = list.slice(start, end);
        const noOfPages = Math.ceil(list.length / NUMBER_OF_ITEMS_PER_PAGE);

        let pages = [];

        for (let i = 0; i < noOfPages; i++) {
            pages.push(i + 1)
        }

        return (
            <div className='organisations_list'>
                {
                    elemsToDisplay.map((elem) => {
                        return (
                            <Fragment>
                                <div className='organisations_list__left'>
                                    <div>
                                        {elem.title}
                                    </div>
                                    <div className='organisations_list__left--mission'>
                                        {elem.description}
                                    </div>
                                </div>
                                <div className='organisations_list__right'>
                                    {elem.items}
                                </div>
                            </Fragment>
                        )
                    })
                }
                <div className='organisations_list__buttons'>
                    {pages.map((pageNumber) => {
                        return (
                            <button
                                className='organisations_list__single_button'
                                onClick={() => this.goToPage(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        )
                    })
                    }
                </div>

            </div>
        )
    }
}

export default SingleList;


