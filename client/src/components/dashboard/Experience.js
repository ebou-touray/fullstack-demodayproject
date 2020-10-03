import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect }from 'react-redux';
<<<<<<< HEAD
import { deleteExperience } from '../../actions/profile';



const Experience = ({experience, deleteExperience }) => {
    const experiences = experience.map(exp => (
        <tr key={exp._id}>
=======



const Experience = ({experience}) => {
    const experiences = experience.map(exp => (
        <td key={exp._id}>
>>>>>>> ed5d1bf2... Text in index.html deleted
            <td>{exp.company}</td>
            <td className="hide-sm">{exp.title}</td>
              <td>
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '}
                {exp.to === null ? (
                    'Now'
                ) : (
                <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
                )}
            </td>
            <td>
<<<<<<< HEAD
                <button onclick={() => deleteExperience(exp._id)} className='btn btn-danger'>Delete</button>
            </td>
        </tr>
=======
                <button className='btn btn-danger'>Delete</button>
            </td>
        </td>
>>>>>>> ed5d1bf2... Text in index.html deleted
    ));

    return (
        <Fragment>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className='hide-sm'>Title</th>
                        <th className='hide-sm'>Years</th>
                    </tr>
                </thead>
                <body>{experiences}</body>
            </table>
        </Fragment>
    )
}

Experience.propTypes = {
<<<<<<< HEAD
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired

}

export default connect(null, {deleteExperience})(Experience);
=======

}

export default Experience
>>>>>>> ed5d1bf2... Text in index.html deleted
