import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPauseBroken = ({
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
      d="M5.525 8.532V5.036a1 1 0 0 1 1-1H8.85a1 1 0 0 1 1 1v14.026a1 1 0 0 1-1 1H6.525a1 1 0 0 1-1-1V12.11M18.984 15.566v3.496a1 1 0 0 1-1 1H15.66a1 1 0 0 1-1-1V5.037a1 1 0 0 1 1-1h2.324a1 1 0 0 1 1 1v6.953"
    />
  </Svg>
);
export default IconlystPauseBroken;
