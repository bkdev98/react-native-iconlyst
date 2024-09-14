import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartLightcurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.922 12.446C1.849 9.096 3.104 4.931 6.62 3.8c1.85-.597 4.133-.099 5.43 1.69 1.223-1.855 3.572-2.283 5.42-1.69 3.516 1.132 4.778 5.297 3.706 8.647-1.67 5.31-7.497 8.076-9.126 8.076s-7.403-2.704-9.13-8.076"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.789 7.564c1.207.124 1.962 1.081 1.917 2.422"
    />
  </Svg>
);
export default IconlystHeartLightcurved;
