import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDivision3Outline = ({
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
      d="M6.596 11.118A.75.75 0 0 1 7 11h10.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.404-1.382"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M13 7.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M12.25 14a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDivision3Outline;
