import React from 'react'
import {PersonalInformation} from './PersonalInformation'
import {Formik} from 'formik';
import {infoTC} from '../../../m2-bll/r2-auth/authThunk';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux';


type ErrorsValueType = {
    name?: string,
}


export const PersonalInformationContainer: React.FC = React.memo(() => {
    const history = useHistory()
    const dispatch = useDispatch()

return (
    <Formik
        initialValues={{name: ''}}
        validate={values => {
            const errors: ErrorsValueType = {};

            if (
                !values.name
            ) {
                errors.name = 'Enter a nickname'
            }

            return errors;
        }}
        onSubmit={(values) => {
            dispatch(infoTC(values.name))
            history.push('/profile')
        }}
        onReset={() => {
            history.push('/profile')
        }
        }
    >
        {(props) => (
            <PersonalInformation {...props}/>
        )}
    </Formik>
    )
})