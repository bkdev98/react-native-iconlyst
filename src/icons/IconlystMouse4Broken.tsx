import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse4Broken = ({
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
      d="M19.194 10.143v-.848C19.193 5.818 16.195 3 12.499 3c-3.7 0-6.697 2.82-6.696 6.297l.002 5.409C5.805 18.182 8.802 21 12.5 21s6.696-2.82 6.696-6.297v-1.34M19.197 10.172H5.805M12.5 5.941v4.234"
    />
  </Svg>
);
export default IconlystMouse4Broken;
