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

            const onSelectEmployeeType = event => {
              changeEmployeeList(event.target.value)
            }
            return (
              <li className="employe-item" onChange={onSelectEmployeeType}>
                <input type="checkbox" id={eachEmployeeType.employmentTypeId} />
                <label
                  htmlFor={eachEmployeeType.employmentTypeId}
                  className="employee-label"
                >
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
            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }

            return (
              <li className="salary-item" onClick={onClickSalary}>
                <input
                  type="radio"
                  id={eachSalary.salaryRangeId}
                  name="salary"
                />
                <label
                  htmlFor={eachSalary.salaryRangeId}
                  className="salary-label"
                >
                  {eachSalary.label}
                </label>
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
