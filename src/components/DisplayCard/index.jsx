import React from "react";
import Card from "antd/lib/card";

const DisplayCard = props => {
    const { imgUrl, title, description, displayValue } = props;
    return (
        <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
        >
            <p>Card content</p>
        </Card>
    );
};

export default DisplayCard;
