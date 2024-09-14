import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockHideLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.842 6.8a4.105 4.105 0 0 1 3.846-2.833c2.264-.02 4.13 1.79 4.16 4.055v2.615M8.296 10.951a6.404 6.404 0 0 0 4.443 11.018 6.37 6.37 0 0 0 4.613-1.962M18.864 21.52 4.85 7.506"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.07 16.573q.08-.497.08-1.017a6.41 6.41 0 0 0-8.28-6.132"
    />
  </Svg>
);
export default IconlystLockHideLight;
