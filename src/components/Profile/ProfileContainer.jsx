import { useParams } from 'react-router-dom'
import React from 'react'
import { Profile } from './Profile'
import { getUserProfile, getUserStatus, updateStatus } from '../../redux/profile-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

export function withRouter(Children){
  return(props)=>{
     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
} 
class ProfileContainer extends React.Component {
  
  componentDidMount(){
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 28140
    }
   this.props.getUserProfile(userId)
   this.props.getUserStatus(userId)
  }
  render() {
   
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
  
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})
export default compose(
    connect(mapStateToProps,{getUserProfile,getUserStatus,updateStatus }),
    withRouter,
    withAuthRedirect
    )(ProfileContainer)