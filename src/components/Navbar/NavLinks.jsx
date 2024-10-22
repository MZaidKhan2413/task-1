const NavLinks = ({link, option}) => {
  return (
    <li><a href={link}>{option.toUpperCase()}</a></li>
  )
}

export default NavLinks