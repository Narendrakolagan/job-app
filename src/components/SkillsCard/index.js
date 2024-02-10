import './index.css'

const SkillsCard = props => {
  const {skillDetails} = props
  const {imageUrl, name} = skillDetails
  return (
    <li className="skill-item">
      <img src={imageUrl} alt={name} className="skill-img" />
      <h1 className="skill-name">{name}</h1>
    </li>
  )
}

export default SkillsCard
