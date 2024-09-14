import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarCircle3Outline = ({
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
      d="M12.25 3.813A8.25 8.25 0 0 0 4 12.063a8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-8.25-8.25m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.28 10.652c0-1.194.967-2.164 2.163-2.164h2.625a.75.75 0 0 1 0 1.5h-2.625a.664.664 0 0 0 0 1.328h1.615a2.164 2.164 0 0 1 0 4.327h-2.625a.75.75 0 0 1 0-1.5h2.625a.663.663 0 1 0 0-1.327h-1.615a2.164 2.164 0 0 1-2.164-2.164"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 7.295a.75.75 0 0 1 .75.75v1.198a.75.75 0 0 1-1.5 0V8.045a.75.75 0 0 1 .75-.75m0 6.848a.75.75 0 0 1 .75.75v1.187a.75.75 0 0 1-1.5 0v-1.187a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarCircle3Outline;
