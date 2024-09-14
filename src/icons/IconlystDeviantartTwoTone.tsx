import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeviantartTwoTone = ({
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
      d="M15.054 2.77a.01.01 0 0 1 .007-.004h2.755a.44.44 0 0 1 .44.44v3.467a.9.9 0 0 1-.152.494l-3.526 5.19a.176.176 0 0 0 .146.275h3.092a.44.44 0 0 1 .44.44v3.254a.44.44 0 0 1-.44.44h-5.852a.44.44 0 0 0-.362.19L8.97 20.761a.01.01 0 0 1-.007.004"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.054 2.766-2.632 3.806a.44.44 0 0 1-.362.19H6.208a.44.44 0 0 0-.44.44v3.253c0 .243.197.44.44.44H9.3c.141 0 .225.158.146.275L5.92 16.36a.9.9 0 0 0-.152.494v3.468c0 .243.197.44.44.44h2.755"
    />
  </Svg>
);
export default IconlystDeviantartTwoTone;
