import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOpenSignBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.292 2.375a2.03 2.03 0 0 0-1.903 2.737L7.13 8.56l-.015.016H7.08c-1.16 0-2.14.414-2.827 1.152-.684.735-1.042 1.75-1.042 2.89v4.964c0 1.142.356 2.156 1.04 2.89.687.74 1.667 1.153 2.83 1.153h9.835c1.162 0 2.143-.413 2.831-1.152.684-.734 1.041-1.75 1.041-2.89v-4.964c0-1.141-.357-2.156-1.04-2.89-.572-.614-1.344-1.003-2.256-1.117l-.043-.051-3.253-3.45a2.03 2.03 0 0 0-1.904-2.735m3.11 6.201-2.215-2.35a2.02 2.02 0 0 1-1.788.001l-2.22 2.35zm-3.548-3.874a1 1 0 0 1 .068.082.528.528 0 0 0 .798-.067.53.53 0 1 0-.866-.015M9.43 12.293a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m5.14 0a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m-3.696 3.577a.75.75 0 1 0-1.158.954A2.95 2.95 0 0 0 12 17.9c.92 0 1.742-.42 2.283-1.077a.75.75 0 1 0-1.157-.954A1.45 1.45 0 0 1 12 16.4c-.453 0-.858-.205-1.126-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOpenSignBold;
