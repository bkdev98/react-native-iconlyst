import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTVStandTwoTone = ({
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
      d="M17.305 16.718a4.03 4.03 0 0 0 4.029-4.03V7.233a4.03 4.03 0 0 0-4.03-4.029H7.363a4.03 4.03 0 0 0-4.028 4.03v5.456a4.03 4.03 0 0 0 4.028 4.029"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.296 20.633 2.622-3.967a.5.5 0 0 1 .834 0l2.622 3.97M7.683 7.988h3.487M9.427 7.988v3.943M13.323 7.988l1.83 3.943 1.831-3.943"
    />
  </Svg>
);
export default IconlystTVStandTwoTone;
