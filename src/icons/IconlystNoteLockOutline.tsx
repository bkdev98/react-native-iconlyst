import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoteLockOutline = ({
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
      d="M8.139 4.033a3.37 3.37 0 0 0-3.37 3.37v9.76a3.37 3.37 0 0 0 3.37 3.37h2.592a.75.75 0 0 1 0 1.5H8.139a4.87 4.87 0 0 1-4.87-4.87v-9.76a4.87 4.87 0 0 1 4.87-4.87h7.096a4.87 4.87 0 0 1 4.87 4.87v3.364a.75.75 0 0 1-1.5 0V7.402a3.37 3.37 0 0 0-3.37-3.369z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.397 9.928a.75.75 0 0 1 .75-.75h5.083a.75.75 0 0 1 0 1.5H9.147a.75.75 0 0 1-.75-.75m0 4.436a.75.75 0 0 1 .75-.75H11.8a.75.75 0 0 1 0 1.5H9.146a.75.75 0 0 1-.75-.75M16.26 17.65a.65.65 0 0 0-.649.65v1.583c0 .36.291.65.65.65h2.82a.65.65 0 0 0 .65-.65V18.3a.65.65 0 0 0-.65-.65zm-2.149.65a2.15 2.15 0 0 1 2.15-2.15h2.82c1.187 0 2.15.964 2.15 2.15v1.583a2.15 2.15 0 0 1-2.15 2.15h-2.82a2.15 2.15 0 0 1-2.15-2.15z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.642 13.47a2.434 2.434 0 0 1 2.463 2.404v1.052a.75.75 0 0 1-1.5 0v-1.037a.934.934 0 0 0-1.867-.006v1.043a.75.75 0 0 1-1.5 0v-1.063a2.435 2.435 0 0 1 2.403-2.392z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNoteLockOutline;
