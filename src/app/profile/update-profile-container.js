import React from 'react';
import {connect} from 'react-redux';
import NavBar from '../common/navbar';
import ProfileUpdated from './profile-updated-action';

class UpdateProfile extends React.Component {
    submitProfileUpdate = () => {
        const userId = this.props.user.user_Id;
        const profile = [...document.getElementsByClassName('profile-field')]
            .reduce((agg, input) => {
                agg[input.name] = input.value;
                return agg;
            }, {} );

        this.props.history.push('/home');
        this.props.updateProfile(userId, profile);
    }

    render()  {
        const profileFields = [ 'occupation','education','experience','skills','hobbies','about','avatar' ];
        const profile = this.props.user.profile;

        return (
            <div id="update-profile">
                <NavBar />
                <h1>Update Profile</h1>

                <ul>
                    {
                        profileFields.map(f => 
                            <li key={f}>
                                <label>{f[0].toUpperCase() + f.slice(1)}</label>
                                <input 
                                    id={ f } 
                                    className="profile-field" 
                                    type="text" name={ f } 
                                    defaultValue={ profile[f] } 
                                />
                            </li>)
                    }
                </ul>

                <button onClick={ () => this.submitProfileUpdate() }>
                    Submit
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser,
    }
}

function mapDispatchToProps(dispatch) {
    const updateProfile = (userId, profile) => dispatch(ProfileUpdated(userId, profile));
    return { updateProfile };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile)