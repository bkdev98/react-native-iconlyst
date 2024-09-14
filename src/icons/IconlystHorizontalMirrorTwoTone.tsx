import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHorizontalMirrorTwoTone = ({
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
      d="M21.5 7.782v8.435c0 2.948-2.081 4.783-5.026 4.783H8.526C5.581 21 3.5 19.165 3.5 16.216V7.782C3.5 4.834 5.581 3 8.526 3h7.948C19.419 3 21.5 4.843 21.5 7.782"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.837 8.892 1.708-2.13a.431.431 0 0 0-.336-.701H10.79a.431.431 0 0 0-.336.7l1.709 2.13c.172.216.5.216.673 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.168 12.002h-2.001m-3.334 0h-2m-3.333 0h-2m18 0h-2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.164 15.113-1.709 2.13a.431.431 0 0 0 .336.701h3.418a.431.431 0 0 0 .336-.701l-1.708-2.13a.43.43 0 0 0-.673 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHorizontalMirrorTwoTone;
