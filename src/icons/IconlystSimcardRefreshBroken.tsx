import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardRefreshBroken = ({
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
      d="m12.5 12.003-1.474-.748a2.995 2.995 0 0 1 4.976 2.245M13.515 14.997l1.474.748a2.995 2.995 0 0 1-4.976-2.245"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.588 21a3.72 3.72 0 0 0 3.72-3.72V9c0-.53-.205-1.039-.57-1.42l-3.793-3.95A2.05 2.05 0 0 0 14.468 3H9.398a3.72 3.72 0 0 0-3.72 3.72v10.558A3.72 3.72 0 0 0 9.398 21h3.595"
    />
  </Svg>
);
export default IconlystSimcardRefreshBroken;
