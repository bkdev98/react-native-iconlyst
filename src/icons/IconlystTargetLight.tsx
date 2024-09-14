import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTargetLight = ({
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
      d="M18.637 7.189a8.65 8.65 0 0 0-6.992-3.552A8.645 8.645 0 0 0 3 12.283c0 4.767 3.87 8.646 8.646 8.646s8.647-3.88 8.647-8.646q0-.772-.14-1.514"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.095 13.724a4.67 4.67 0 0 1-4.45 3.243 4.69 4.69 0 0 1-4.683-4.682 4.685 4.685 0 0 1 4.683-4.683c1.561 0 2.945.757 3.777 1.934M11.65 12.28 21 5.465"
    />
  </Svg>
);
export default IconlystTargetLight;
