import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnimalKingLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.58 16.607 3 7.63a.55.55 0 0 1 .932-.429l2.62 2.555s2.996-2.981 4.554-4.54a1.275 1.275 0 0 1 1.81.003c1.544 1.558 4.53 4.542 4.53 4.542s1.543-1.515 2.622-2.571c.36-.354.963-.072.93.43l-.578 8.987a3.37 3.37 0 0 1-3.362 3.153H6.942a3.37 3.37 0 0 1-3.363-3.152"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.989 10.524v-.044m-.006-.133a.195.195 0 1 0 .002.39.195.195 0 0 0-.002-.39M14.818 11.961v-.045m-.006-.132a.195.195 0 1 0 .002.39.195.195 0 0 0-.002-.39M9.173 11.961v-.045m-.006-.132a.195.195 0 1 0 .002.39.195.195 0 0 0-.002-.39"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.017 16.414c1.185 0 2.688 1.027 2.667-.554-.009-1.185-1.244-2.298-2.667-2.3-1.432 0-2.854 1.21-2.657 2.443.219 1.429 1.607.411 2.657.411Z"
    />
  </Svg>
);
export default IconlystAnimalKingLight;
