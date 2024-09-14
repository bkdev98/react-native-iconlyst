import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBadooCircleTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.364 8.426zc1.178.02 2.174.837 2.512 1.915.209.67.13 1.408-.056 2.073-.644 2.302-2.91 4.008-4.82 4.008s-4.177-1.706-4.82-4.008c-.186-.665-.265-1.404-.056-2.073.337-1.079 1.334-1.896 2.513-1.915A2.53 2.53 0 0 1 12 9.91a2.54 2.54 0 0 1 2.364-1.483"
    />
  </Svg>
);
export default IconlystBadooCircleTwoTone;
