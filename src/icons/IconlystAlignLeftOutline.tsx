import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignLeftOutline = ({
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
      d="M5.448 14.75c-.8 0-1.448.648-1.448 1.448v2.604c0 .8.648 1.448 1.448 1.448h13.604c.8 0 1.448-.648 1.448-1.448v-2.604c0-.8-.648-1.448-1.448-1.448zM2.5 16.198a2.95 2.95 0 0 1 2.948-2.948h13.604A2.95 2.95 0 0 1 22 16.198v2.604a2.95 2.95 0 0 1-2.948 2.948H5.448A2.95 2.95 0 0 1 2.5 18.802zM5.448 3.75C4.648 3.75 4 4.398 4 5.198v2.604c0 .8.648 1.448 1.448 1.448h6.604c.8 0 1.448-.648 1.448-1.448V5.198c0-.8-.648-1.448-1.448-1.448zM2.5 5.198A2.95 2.95 0 0 1 5.448 2.25h6.604A2.95 2.95 0 0 1 15 5.198v2.604a2.95 2.95 0 0 1-2.948 2.948H5.448A2.95 2.95 0 0 1 2.5 7.802z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlignLeftOutline;
