import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDivision2Outline = ({
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
      d="M7.864 11.75a.75.75 0 0 1 .75-.75h6.772a.75.75 0 0 1 0 1.5H8.614a.75.75 0 0 1-.75-.75M12.802 15.136a.75.75 0 0 1-.75.75H12a.75.75 0 0 1 0-1.5h.052a.75.75 0 0 1 .75.75M12.802 8.365a.75.75 0 0 1-.75.75H12a.75.75 0 0 1 0-1.5h.052a.75.75 0 0 1 .75.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2a9.75 9.75 0 0 1 9.75 9.75c0 5.384-4.365 9.75-9.75 9.75s-9.75-4.366-9.75-9.75A9.75 9.75 0 0 1 12 2m8.25 9.75A8.25 8.25 0 0 0 12 3.5a8.25 8.25 0 1 0 8.25 8.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDivision2Outline;
