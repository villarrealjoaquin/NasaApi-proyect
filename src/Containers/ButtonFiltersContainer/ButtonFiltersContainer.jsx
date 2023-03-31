import { ButtonFilter } from '../../components/ButtonFilter/ButtonFilter'
import { GaleryImg } from '../../components/GaleryImg/GaleryImg'
import { buttonFiltersData } from '../../const/const'
import '../../styles/ButtonFiltersContainer.css'

export const ButtonFiltersContainer = ({ handleClick, selecteClass }) => {
  return (
    <>
      {buttonFiltersData.map((button, index) => {
        return (
          <ButtonFilter
            key={button.title}
            data={button}
            index={index}
            active={selecteClass === index}
            onClick={() => handleClick(index)}
          />
        )
      })}
    </>
  )
}
