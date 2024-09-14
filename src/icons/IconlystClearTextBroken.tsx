import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClearTextBroken = ({
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
      d="M14.016 18.794H9.453a2.07 2.07 0 0 1-1.56-.707l-4.13-4.722a2.074 2.074 0 0 1 0-2.73l4.13-4.72c.394-.45.963-.708 1.56-.708h9.126a2.67 2.67 0 0 1 2.671 2.67v8.245a2.67 2.67 0 0 1-2.67 2.672h-.282M12.402 14.056l4.111-4.11m0 4.11-4.11-4.11"
    />
  </Svg>
);
export default IconlystClearTextBroken;
