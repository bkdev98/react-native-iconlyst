import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMakerBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.5C7.261 2.5 3 6.762 3 12s4.261 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.36 15a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.134-.644l-3.78 2.25a.75.75 0 0 0-.366.645v2.25a.75.75 0 0 0 1.5 0v-1.824l2.28-1.357v3.18c0 .415.336.75.75.75M11.42 15a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.366-.645l-3.78-2.25a.75.75 0 0 0-1.134.646v4.5a.75.75 0 0 0 1.5 0V11.07l2.28 1.357v1.824c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystMakerBulk;
