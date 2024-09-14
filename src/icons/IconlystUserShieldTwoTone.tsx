import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserShieldTwoTone = ({
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
      d="M11.985 14.75c-3.337 0-6.182.504-6.182 2.524 0 2.018 2.83 2.54 6.182 2.54"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.231 19.999s2.248-.681 2.248-2.558.082-2.022-.098-2.204c-.181-.181-1.855-.764-2.15-.764s-1.968.583-2.149.764c-.18.181-.099.327-.099 2.204s2.248 2.558 2.248 2.558"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.935 7.948a3.949 3.949 0 1 1-7.898 0 3.949 3.949 0 0 1 7.897 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserShieldTwoTone;
