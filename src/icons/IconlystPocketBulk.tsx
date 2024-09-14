import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPocketBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.201 3.4H4.798A2.3 2.3 0 0 0 2.5 5.701v5.4c0 5.237 4.261 9.5 9.5 9.5s9.5-4.263 9.5-9.5V5.7a2.303 2.303 0 0 0-2.299-2.3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m12.53 14.33 3.6-3.6a.75.75 0 0 0-1.06-1.061L12 12.739l-3.07-3.07a.75.75 0 1 0-1.06 1.061l3.6 3.6a.75.75 0 0 0 1.06 0"
    />
  </Svg>
);
export default IconlystPocketBulk;
