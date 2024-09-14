import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLTECircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.625a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75c0 5.384-4.365 9.75-9.75 9.75s-9.75-4.366-9.75-9.75m4.788-3.072a.75.75 0 0 1 .75.75v3.679h1.037a.75.75 0 1 1 0 1.5H7.288a.75.75 0 0 1-.75-.75v-4.43a.75.75 0 0 1 .75-.75M11 11.307v3.675a.75.75 0 0 0 1.5 0v-3.675h.727a.75.75 0 0 0 0-1.5h-1.4a1 1 0 0 0-.153 0h-1.4a.75.75 0 0 0 0 1.5zm3.69-.75a.75.75 0 0 1 .75-.75H17.6a.75.75 0 0 1 0 1.5H16.19v.71h.976a.75.75 0 0 1 0 1.5h-.976v.715h1.408a.75.75 0 0 1 0 1.5H15.44a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLTECircleOutline;
