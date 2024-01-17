import React from "react"
import { Preloader } from "../../common/Preloader/Preloader"
import ProfileStatus from "./ProfileStatus"

export function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader/>
  }
    return <div>
      <div>Большая картинка</div>
      <div>
        <img src={props.profile.photos.large} alt="аватар" />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
  }