import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!!!</h4>
                    Are you sure you want to delete this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at  4:45PM" content="hey dood" avatar={faker.image.image()}></CommentDetail>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Muthu" timeAgo="Today at  2:00AM" content="this video was very awesome" avatar={faker.image.image()}></CommentDetail>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at  5:45PM" content="hello everyone" avatar={faker.image.image()}></CommentDetail>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));