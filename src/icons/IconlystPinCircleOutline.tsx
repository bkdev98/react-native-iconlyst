import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinCircleOutline = ({
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
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 8.79a2.56 2.56 0 0 0-2.56 2.56c0 .904.55 1.882 1.267 2.69.348.391.707.71.999.927q.178.13.295.196.117-.067.295-.197a6.8 6.8 0 0 0 .998-.926c.717-.808 1.268-1.786 1.268-2.69a2.56 2.56 0 0 0-2.561-2.56m.119 6.433.005.001zM8.19 11.35a4.062 4.062 0 0 1 8.122 0c0 1.453-.84 2.779-1.645 3.686-.414.466-.85.857-1.229 1.136-.188.14-.374.26-.545.35-.135.07-.378.186-.641.186-.264 0-.507-.116-.642-.186a4 4 0 0 1-.545-.35 8.3 8.3 0 0 1-1.228-1.136c-.806-.907-1.647-2.233-1.647-3.686"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.31 11.378a.94.94 0 1 1 1.88 0 .94.94 0 0 1-1.88 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinCircleOutline;
