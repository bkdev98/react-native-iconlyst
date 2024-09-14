import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogoutBroken = ({
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
      d="M15.016 7.39v-.933a3.685 3.685 0 0 0-3.685-3.685H6.456a3.685 3.685 0 0 0-3.684 3.685v5.565M15.016 16.655v.942a3.675 3.675 0 0 1-3.675 3.674H6.456a3.685 3.685 0 0 1-3.684-3.684v-1.783M21.81 12.021H9.769M18.881 9.106l.732.729m2.196 2.186-2.928 2.916"
    />
  </Svg>
);
export default IconlystLogoutBroken;
