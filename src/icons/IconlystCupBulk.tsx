import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCupBulk = ({
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
      d="M6.899 19.234h11.345a.75.75 0 0 1 0 1.5H6.899a.75.75 0 0 1 0-1.5"
    />
    <Path
      fill={props.color}
      d="M22.22 5.442a.75.75 0 0 0-.744-.666h-2.463c.034-.56.037-.933.037-1.01a.5.5 0 0 0-.5-.5H6.45a.5.5 0 0 0-.5.5c0 .078.003.45.037 1.01H3.524a.75.75 0 0 0-.745.666c-.02.174-.443 4.28 2.712 6.356a.752.752 0 0 0 1.039-.214.75.75 0 0 0-.215-1.04C4.589 9.41 4.29 7.34 4.255 6.277h1.873c.389 3.129 1.637 8.114 5.62 8.678v1.755H9.404a.5.5 0 0 0-.477.347l-.697 2.176h8.682l-.696-2.175a.5.5 0 0 0-.476-.348h-2.492v-1.753c3.992-.556 5.238-5.548 5.626-8.68h1.87c-.034 1.063-.333 3.134-2.06 4.269a.75.75 0 1 0 .825 1.253c3.155-2.075 2.732-6.182 2.712-6.356"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.762 9.792a.75.75 0 0 1 0 1.5h-2.207a.75.75 0 0 1-.536-1.274L12.78 8.22c.226-.267.248-.426.248-.552 0-.256-.235-.464-.524-.464-.293 0-.532.208-.532.464a.75.75 0 0 1-1.5 0c0-1.083.912-1.964 2.032-1.964 1.116 0 2.024.881 2.024 1.964 0 .556-.204 1.053-.643 1.564l-.548.561z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCupBulk;
