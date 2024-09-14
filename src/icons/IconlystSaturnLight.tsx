import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSaturnLight = ({
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
      d="M5.353 12a7.03 7.03 0 1 0 14.06 0 7.03 7.03 0 0 0-14.06 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.895 6.588c-2.217-.603-3.878-.55-4.368.299-.882 1.528 2.367 5.056 7.258 7.88 4.89 2.823 9.57 3.874 10.453 2.346.49-.849-.294-2.313-1.924-3.932"
    />
  </Svg>
);
export default IconlystSaturnLight;
