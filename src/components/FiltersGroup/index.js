import ProfileDetails from '../ProfileDetails'

import './index.css'

const FiltersGroup = props => {
  const renderTypeofEmployment = () => {
    const {employmentTypesList} = props
    return (
      <div>
        <h1 className="employee-heading">Type of Employment</h1>
        <ul>
          {employmentTypesList.map(eachEmployeeType => {
            const {changeEmployeeList} = props
            return (
              <li>
                <input type="checkbox" />
                <label className="employee-label">
                  {eachEmployeeType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div className="salary-container">
        <h1 className="salary-heading">Salary Range</h1>
        <ul>
          {salaryRangesList.map(eachSalary => {
            const {changeSalary} = props
            return (
              <li className="salary-item">
                <input type="radio" />
                <label className="salary-label">{eachSalary.label}</label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filter-groups-container">
      <ProfileDetails />
      <hr />
      {renderTypeofEmployment()}
      <hr />
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup
