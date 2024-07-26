import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Container,
    Row,
    Col,
    Card,
} from 'react-bootstrap';

import { Formik, Form } from 'formik';
import { Input } from '@theme';

import {
    LIST_ANIMAL,
    CHANGE_ANIMAL_STATUS
} from '@model';

import { AnimalNew } from './AnimalNew';

class Animal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // /////////////////////////////////////////////////////////////////////////////
    async componentDidMount() {
        await this.props.listAnimal();
    }
    // /////////////////////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////////////////////
    onSubmit = async (values) => {
        await this.props.changeAnimalStatus(values);
        this.props.reloadPage();
    }
    // /////////////////////////////////////////////////////////////////////////////

    render() {

        const { t } = this.props;
        const { animalReducer } = this.props;

        return (
            <Container>
                <Row>
                    <Col md='12'><h1>{t('animal_page_title')}</h1></Col>
                </Row>
                <Row>
                    <Col md='1'>
                        <AnimalNew reloadPage={() => this.componentDidMount()} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md='12'>
                        {animalReducer.list && animalReducer.list.map((animal) =>
                            <div key={animal.id}>
                                <Card>
                                    <Card.Header>
                                        {animal.name}
                                    </Card.Header>
                                    <Card.Body>
                                        <pre>{animal.imageUrl}</pre>
                                        <pre>{animal.description}</pre>
                                        <pre>{animal.category.name}</pre>
                                        <pre>{animal.birthDateConverted.clean}</pre>
                                        <pre>{animal.status}</pre>
                                        <Row>
                                            <Formik
                                                initialValues={animal}
                                                validationSchema={animal.validation}
                                                onSubmit={(values) => this.onSubmit(values)}
                                            >
                                                {(formik) => (
                                                    <Form>
                                                        {formik.values &&
                                                            <>
                                                                {/* // ///////////////////////////////////////////////////////////// */}
                                                                <Row>
                                                                    <Input {...formik}
                                                                        label={t('animal_status')}
                                                                        placeholder={t('animal_status')}
                                                                        name='status'
                                                                        type='checkbox'
                                                                        onChange={(values) => this.onSubmit(values)}
                                                                    />
                                                                </Row>
                                                                {/* // ///////////////////////////////////////////////////////////// */}
                                                            </>
                                                        }
                                                    </Form>
                                                )}
                                            </Formik>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <hr />
                            </div>
                        )}
                    </Col>
                </Row>
            </Container >
        );
    }
}

export function mapStateToProps(state) {
    const { animalReducer } = state.model;
    return { animalReducer };
};

function mapDispatchToProps(dispatch) {
    return {
        listAnimal: () => dispatch({ type: LIST_ANIMAL }),
        changeAnimalStatus: (data) => dispatch({ type: CHANGE_ANIMAL_STATUS, data }),
    }
}

const connectedAnimal = connect(mapStateToProps, mapDispatchToProps);
let exportAnimal = (connectedAnimal)(Animal);
exportAnimal = withTranslation()(exportAnimal);
exportAnimal = withRouter(exportAnimal);
export { exportAnimal as Animal };