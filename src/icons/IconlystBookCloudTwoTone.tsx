import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookCloudTwoTone = ({
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
      d="M19.819 14.98v1.045m0 0H7.425a2.486 2.486 0 1 0 0 4.974h11.202c.66 0 1.197-.534 1.199-1.195z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.297 8.442c-1.033.009-1.87.703-1.87 1.886 0 .764.456 1.423 1.11 1.719.275.112.55.154.758.154h4.46a2.1 2.1 0 0 0 .763-.152 1.89 1.89 0 0 0 1.108-1.721c0-1.183-.835-1.877-1.868-1.886 0-.743-.584-2.231-2.231-2.231s-2.23 1.488-2.23 2.23"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.74 16.026V3.094"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.938 18.513V5.591A2.59 2.59 0 0 1 7.528 3H18.62a1.2 1.2 0 0 1 1.199 1.199v.43"
    />
  </Svg>
);
export default IconlystBookCloudTwoTone;
