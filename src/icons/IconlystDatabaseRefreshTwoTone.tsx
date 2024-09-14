import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseRefreshTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M11.559 8.914c4.047 0 7.327-1.324 7.327-2.956 0-1.633-3.28-2.956-7.327-2.956S4.23 4.325 4.23 5.958c0 1.632 3.281 2.956 7.328 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.231 5.98v11.543s0 2.917 7.37 2.917M18.885 10.898V5.854"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.231 11.688s0 2.917 7.37 2.917M15.435 15.383a3.21 3.21 0 0 1 5.334 2.407M19.68 20.196a3.21 3.21 0 0 1-5.334-2.407"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDatabaseRefreshTwoTone;
