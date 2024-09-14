import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelephoneBroken = ({
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
      d="M12.498 3.52c9.674 0 8.96 3.471 9.002 3.861 0 3.468-1.058 2.947-3.788 2.948-2.831 0-.767-3.39-5.214-3.39s-2.38 3.391-5.21 3.392c-2.73 0-3.788.512-3.788-2.947.036-.331-.474-2.873 5.249-3.643M20.015 12.758v3.526c0 2.457-1.537 4.196-3.995 4.196h-3.525M8.97 20.48c-2.458 0-3.986-1.74-3.986-4.196v-3.516M12.5 12.232a2.193 2.193 0 1 0 2.194 2.194"
    />
  </Svg>
);
export default IconlystTelephoneBroken;
