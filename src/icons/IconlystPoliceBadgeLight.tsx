import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoliceBadgeLight = ({
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
      d="m12.384 11.211.637 1.273a.43.43 0 0 0 .323.232l1.426.205a.422.422 0 0 1 .238.722l-1.031.99a.42.42 0 0 0-.124.376l.244 1.398a.428.428 0 0 1-.623.446l-1.273-.66a.44.44 0 0 0-.4 0l-1.274.66a.428.428 0 0 1-.623-.446l.244-1.398a.42.42 0 0 0-.124-.375l-1.032-.99a.422.422 0 0 1 .238-.723l1.426-.205a.43.43 0 0 0 .323-.231l.638-1.274a.432.432 0 0 1 .767 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.909 11.975c-1.726-3.893-.546-5.477.577-6.061L18.3 4.487c-1.362.632-4.743.694-6.3-1.454-1.558 2.149-4.94 2.086-6.302 1.454L4.515 5.914c1.123.584 2.303 2.168.576 6.06-3.137 7.075 6.91 9.56 6.91 9.56s10.045-2.485 6.908-9.56"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.455 8.116c2.027-.61 3.141-.598 5.09 0"
    />
  </Svg>
);
export default IconlystPoliceBadgeLight;
