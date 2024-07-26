import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Row,
    Modal,
    Button,
} from 'react-bootstrap';

import { Formik, Form } from 'formik';

import {
    animal,
    CREATE_ANIMAL,
    NEW_ANIMAL,
    LIST_CATEGORY,
} from '@model';
import { Input } from '@theme';
import { Select } from '@theme';

class AnimalNew extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    // /////////////////////////////////////////////////////////////////////////////
    async componentDidMount() {
        await this.props.listCategory();
    }
    // /////////////////////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////////////////////
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true })
    // /////////////////////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////////////////////
    newForm = async () => {
        await this.props.newForm();
        this.handleShow();
    }
    // /////////////////////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////////////////////
    onSubmit = async (values) => {
        await this.props.createAnimal(values);
        this.handleClose();
        this.props.reloadPage();
    }
    // /////////////////////////////////////////////////////////////////////////////

    render() {

        const { t } = this.props;
        const { initialValues } = this.props;
        const { categoryReducer } = this.props;

        return (
            <>
                <Button variant='outline-primary' className='fas fa-plus'
                    onClick={this.newForm}>
                    {t('def_btn_add')}
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop='static'
                    keyboard={false}
                >
                    <Formik
                        initialValues={initialValues}
                        validationSchema={animal.validation}
                        onSubmit={(values) => this.onSubmit(values)}
                    >
                        {(formik) => (
                            <Form>

                                <Modal.Header closeButton>
                                    <Modal.Title><i className='fas fa-plus' />{t('def_modal_new')}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>


                                    {formik.values &&
                                        <>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('animal_name')}
                                                    placeholder={t('animal_name')}
                                                    name='name'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('animal_desc')}
                                                    placeholder={t('animal_desc')}
                                                    name='description'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('animal_imageUrl')}
                                                    placeholder={t('animal_imageUrl')}
                                                    name='imageUrl'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            {categoryReducer.list &&
                                                <Row>
                                                    <Select {...formik}
                                                        label={t('animal_category')}
                                                        placeholder={t('animal_category')}
                                                        name='category.id'
                                                        list={categoryReducer.list}
                                                    />
                                                </Row>
                                            }
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('animal_birthDate')}
                                                    placeholder={t('animal_birthDate')}
                                                    name='birthDate'
                                                    type='date'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('animal_status')}
                                                    placeholder={t('animal_status')}
                                                    name='status'
                                                    type='checkbox'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            
                                        </>
                                    }

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant='secondary' onClick={this.handleClose}>
                                        {t('def_close')}
                                    </Button>
                                    <Button variant='outline-primary' className='fas fa-check' type='submit' >
                                        {t('def_btn_add')}
                                    </Button>
                                </Modal.Footer>

                            </Form>
                        )}
                    </Formik>
                </Modal>
            </>
        );
    }
}

export function mapStateToProps(state) {
    const { animalReducer, categoryReducer } = state.model;

    return { animalReducer, categoryReducer, initialValues: animalReducer.oid };
};

function mapDispatchToProps(dispatch) {
    return {
        newForm: () => dispatch({ type: NEW_ANIMAL }),
        createAnimal: (data) => dispatch({ type: CREATE_ANIMAL, data }),
        listCategory: () => dispatch({ type: LIST_CATEGORY }),
    }
}

const connectedAnimalNew = connect(mapStateToProps, mapDispatchToProps);
let exportAnimalNew = (connectedAnimalNew)(AnimalNew);
exportAnimalNew = withTranslation()(exportAnimalNew);
exportAnimalNew = withRouter(exportAnimalNew);
export { exportAnimalNew as AnimalNew };