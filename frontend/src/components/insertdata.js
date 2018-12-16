import React, { Component } from 'react';

import {
    Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from 'reactstrap';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            title: '',
            description: '',
            image: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { title, value } = event.target;

        this.setState({
            [title]: value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { title, description, image } = this.state;

        return (

            <form className="form-group-sm">
                <Row className="ContentItem">
                    <Col xs="3" />
                    <Col xs="12" sm="6">
                        <Card>
                            <CardBody>
                                <CardText>
                                    <label>Title</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="title"
                                        // value={title}
                                        // onChange={this.handleChange} 
                                        />
                                    
                                </CardText>

                                <CardText>
                                <label>Description</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="description"
                                        // value={description}
                                        // onChange={this.handleChange} 
                                        />
                                </CardText>

                                 <CardText>
                                 <label for="image">Image</label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        id="image"
                                        name="image"
                                        // value={image}
                                        // onChange={this.handleChange} 
                                        />
                                </CardText>


                                <CardText>
                                    <input
                                        className="btn btn-success"
                                        type="button"
                                        value="Submit"
                                        // onClick={this.submitForm} 
                                        />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </form>

        );
    }
}

export default Form;