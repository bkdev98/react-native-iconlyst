import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitBranchOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.883 15.555a1.848 1.848 0 1 0 .001 3.695 1.848 1.848 0 0 0 0-3.695m-3.347 1.847a3.348 3.348 0 1 1 6.695 0 3.348 3.348 0 0 1-6.695 0M17.617 4.75a1.848 1.848 0 1 0 0 3.695 1.848 1.848 0 0 0 0-3.695M14.27 6.597a3.348 3.348 0 1 1 6.695.001 3.348 3.348 0 0 1-6.695 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.822 4.29a.75.75 0 0 1 .75.75v9.768a.75.75 0 0 1-1.5 0V5.04a.75.75 0 0 1 .75-.75M17.519 8.441a.75.75 0 0 1 .745.755c-.029 4.916-3.903 8.906-8.76 9.14a.75.75 0 1 1-.072-1.498 7.705 7.705 0 0 0 7.332-7.651.75.75 0 0 1 .755-.746"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitBranchOutline;
