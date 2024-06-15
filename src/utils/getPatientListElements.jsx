import Icon from "./Icon"

export const getPatientListElements = (data) => data.map((d) => {
  return (
    <div className='patient-tile' key={d.name}>
      <div className='patient-icon-details'>
        <img className="person-icon" src={d.profile_picture} />
        <div>
          <p className='name'>{d.name}</p>
          <p className='gender'>{d.gender}, {d.age}</p>
        </div>
      </div>
      <Icon icon="morehoriz" />
    </div>
  )
})