import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLock2Light = ({
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
      d="M19.324 13.609c0 6.113-7.324 8.33-7.324 8.33s-7.323-2.216-7.323-8.33-.267-6.592.32-7.18c.59-.588 6.043-2.49 7.003-2.49s6.413 1.897 7.002 2.49.322 1.067.322 7.18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.943 13.58.001 2.187zm1.247-2.86a1.675 1.675 0 1 1-2.367 2.37 1.675 1.675 0 0 1 2.367-2.37"
    />
  </Svg>
);
export default IconlystShieldLock2Light;
