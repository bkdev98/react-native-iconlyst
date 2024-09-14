import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldInfoTwoTone = ({
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
      d="M12 21.453s7.324-2.217 7.324-8.33c0-6.114.266-6.587-.322-7.18-.59-.594-6.041-2.49-7.002-2.49s-6.413 1.901-7.002 2.49c-.588.588-.321 1.065-.321 7.18 0 6.114 7.323 8.33 7.323 8.33"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 15.972v-4.625m.004-2.845v-.09"
    />
  </Svg>
);
export default IconlystShieldInfoTwoTone;
