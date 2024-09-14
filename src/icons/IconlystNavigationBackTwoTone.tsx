import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationBackTwoTone = ({
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
      d="m19.97 18.05-4.296-3.82a2.32 2.32 0 0 0-3.083 0l-4.296 3.82c-1.283 1.14-.243 3.244 1.442 2.916l4.074-.792h.643l4.073.792c1.685.328 2.726-1.776 1.443-2.916"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.727 10.676-2.135 2.186-2.135-2.186"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.592 12.86V6.77a3.77 3.77 0 0 1 7.54 0v3.19"
    />
  </Svg>
);
export default IconlystNavigationBackTwoTone;
