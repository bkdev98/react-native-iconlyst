import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiagonalMouthOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M15.475 9.9a.976.976 0 0 1-.001-1.95.975.975 0 1 1 0 1.95zM8.975 9.9a.976.976 0 0 1-.001-1.95.975.975 0 1 1 0 1.95zM10.478 15.406H7.82a.75.75 0 1 1 0-1.5h2.658a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystDiagonalMouthOutline;
