import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchTagTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.596 18.01q-1.074 1.072-2.152 2.14c-1.221 1.202-3.085 1.185-4.306-.028-2.072-2.071-4.152-4.134-6.215-6.215-.796-.804-1.266-1.773-1.375-2.912-.08-.905-.036-4.28-.036-5.066.01-1.412 1.077-2.686 2.47-2.93.289-.046 3.636-.037 5.03-.037 1.366 0 2.541.488 3.51 1.456q.32.323.643.644"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.443 8.294a1.616 1.616 0 0 1-1.619 1.592 1.62 1.62 0 0 1-1.603-1.607 1.613 1.613 0 0 1 1.641-1.615c.87.003 1.584.74 1.58 1.63M17.814 7.914a3.112 3.112 0 1 1 0 6.225 3.112 3.112 0 0 1 0-6.225"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.934 13.305 1.566 1.563"
    />
  </Svg>
);
export default IconlystSearchTagTwoTone;
