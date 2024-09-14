import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectingCableCircleBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.865 16.27a2.514 2.514 0 0 1 0-3.555l.559-.559a.5.5 0 0 1 .704 0l2.85 2.85a.5.5 0 0 1 0 .705l-.558.559a2.514 2.514 0 0 1-3.555 0M11.865 9.422l2.85 2.85c.195.195.51.195.705 0l.558-.558A2.514 2.514 0 0 0 13.11 7.67M9.628 12.656l1.1-1.101m.754 2.956 1.101-1.102M7.863 16.273l-2.3 2.301M15.981 8.156l2.297-2.297"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.364 18.669a9 9 0 1 0-3.148 2.044"
    />
  </Svg>
);
export default IconlystConnectingCableCircleBroken;
