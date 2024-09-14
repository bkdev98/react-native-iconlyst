import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHoldRecordBroken = ({
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
      d="M3.25 15.531v1.577A3.89 3.89 0 0 0 7.143 21H8.4M21.25 15.531v1.577A3.89 3.89 0 0 1 17.356 21h-1.29M3.25 8.47V6.893A3.89 3.89 0 0 1 7.143 3h1.289M21.25 8.47V6.893A3.89 3.89 0 0 0 17.356 3H16.1M12.25 7.8a4.198 4.198 0 1 0 2.69.977"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 12.051v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystHoldRecordBroken;
