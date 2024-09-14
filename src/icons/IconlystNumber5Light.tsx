import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber5Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 17.75a5.06 5.06 0 0 0 4.45 2.633c2.79 0 5.05-2.235 5.05-4.993 0-2.757-2.26-4.992-5.05-4.992-1.162 0-2.606.414-3.46 1.067l1.313-7.082h6.268"
    />
  </Svg>
);
export default IconlystNumber5Light;
