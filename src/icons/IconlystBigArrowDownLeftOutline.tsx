import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowDownLeftOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.264 18.248c1.572-.001 3.146-.003 4.71.001.57.002.851-.688.456-1.084l-1.757-1.757c-.5-.5-.5-1.31 0-1.81l5.393-5.393a.627.627 0 0 0 0-.887L15.52 4.772a.627.627 0 0 0-.887 0l-5.394 5.393c-.5.5-1.31.5-1.81 0l-1.76-1.76a.634.634 0 0 0-1.08.45q.005 2.639.002 5.278-.002 1.748-.001 3.492c0 .345.279.623.622.624q2.02.001 4.052 0m.01 1.5c-1.352.002-2.704.003-4.064 0a2.124 2.124 0 0 1-2.12-2.122v-3.498q.004-2.634 0-5.27c-.004-1.896 2.293-2.86 3.64-1.514l1.604 1.604 5.238-5.237c.83-.83 2.177-.83 3.008 0l2.547 2.547c.83.83.83 2.177 0 3.008l-5.238 5.238 1.601 1.6c1.35 1.35.378 3.65-1.52 3.645q-2.353-.005-4.697 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowDownLeftOutline;
