import React from 'react';

//import library
import { Form } from 'react-router-dom';

//import assets
import illustrasion from '../assets/illustration.jpg';

const Intro = () => {
    return (
        <div className='intro'>
            <div>
                <h1>
                    Managemen <span className='accent'>Uangmu!</span>{' '}
                </h1>

                <p>ini adalah aplikasi pengelola personal keuanganmu. </p>
                <Form method='post'>
                    <input
                        type='text'
                        name='userName'
                        required
                        placeholder='Siapa Namamu'
                        autoComplete='given-name'
                    />
                    <button className='btn btn--dark'>
                        buat akun <span></span>
                    </button>
                </Form>
            </div>
            <img src={illustrasion} alt='' width={600} />
        </div>
    );
};

export default Intro;
