import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnvatoTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.328 3.903c-.24-.448-.359-.671-.635-.808-.277-.138-.512-.104-.982-.035-4.655.679-8.638 5.614-8.942 10.238-.046.704-.07 1.057-.294 1.096-.226.039-.352-.243-.605-.806-.502-1.118-.65-2.444-.61-3.641.032-.999.048-1.498-.233-1.585-.28-.086-.525.28-1.014 1.013"
    />
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.328 3.902C22.33 11.384 19.325 21 11.623 21c-6.06 0-9.676-7.027-6.61-11.625"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEnvatoTwoTone;
