import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpRoundLeftRightLight = ({
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
      d="M5.636 5.636A8.97 8.97 0 0 0 3 12a8.97 8.97 0 0 0 2.636 6.364m12.728 0A8.97 8.97 0 0 0 21 12a8.97 8.97 0 0 0-2.636-6.364M12 16V8m0 0-3 3m3-3 3 3"
    />
  </Svg>
);
export default IconlystArrowUpRoundLeftRightLight;
