import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserShieldBroken = ({
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
      d="M11.735 14.75c-3.337 0-6.182.504-6.182 2.524 0 2.018 2.83 2.54 6.182 2.54"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.981 19.999s2.248-.681 2.248-2.558.082-2.022-.098-2.204c-.181-.181-1.855-.764-2.15-.764s-1.968.583-2.149.764c-.18.181-.099.327-.099 2.204s2.248 2.558 2.248 2.558"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.826 7.93A3.93 3.93 0 1 0 8.84 5.294"
    />
  </Svg>
);
export default IconlystUserShieldBroken;
