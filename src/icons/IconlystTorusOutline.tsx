import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTorusOutline = ({
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
      d="M4.75 3.75A.75.75 0 0 0 4 4.5v2.332c0 .415.336.75.75.75h3.165a.75.75 0 0 1 .75.75V19.5c0 .414.336.75.75.75h2.336a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75zM2.5 4.5a2.25 2.25 0 0 1 2.25-2.25h7.001a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25H9.415a2.25 2.25 0 0 1-2.25-2.25V9.083H4.75a2.25 2.25 0 0 1-2.25-2.25zM18.57 3.78a1.902 1.902 0 1 0 0 3.803 1.902 1.902 0 0 0 0-3.804M15.168 5.68a3.402 3.402 0 1 1 6.804 0 3.402 3.402 0 0 1-6.804 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTorusOutline;
