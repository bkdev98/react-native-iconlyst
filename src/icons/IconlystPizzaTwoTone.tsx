import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPizzaTwoTone = ({
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
      d="m3.802 7.652 7.003 12.204c.738 1.285 2.591 1.288 3.333.005l7.056-12.205c.74-1.277.078-2.889-1.331-3.328q-7.363-2.3-14.726.002c-1.406.44-2.068 2.045-1.335 3.322"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.104 8.128c.087-.037.174-.074.273-.112 5.422-1.807 10.833-1.807 16.244 0 .098.038.185.075.273.112"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.125 10.4a1.297 1.297 0 1 1-2.594 0 1.297 1.297 0 0 1 2.594 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.643 18.988a2.716 2.716 0 0 1 .908-5.281c.678 0 1.301.248 1.77.65M9.099 16.908a2.42 2.42 0 0 0 1.096-2.03 2.43 2.43 0 0 0-2.423-2.423c-.384 0-.753.09-1.08.262M16.557 9.664l.108 1.713M7.67 9.664l1.456.37"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPizzaTwoTone;
