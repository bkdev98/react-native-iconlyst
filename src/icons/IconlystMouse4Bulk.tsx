import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse4Bulk = ({
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
      d="m12.005 10.886-.005.001H5.105a.3.3 0 0 0-.3.3v3.482c0 3.746 3.227 6.794 7.195 6.794s7.196-3.049 7.196-6.797v-3.48a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 9.086a.3.3 0 0 0 .3.3h6.017c.07 0 .128-.057.128-.128-.001-3.4-2.66-6.224-6.116-6.717a.29.29 0 0 0-.328.291zM10.95 9.386a.3.3 0 0 0 .3-.3V2.831a.29.29 0 0 0-.328-.291 7.3 7.3 0 0 0-4 1.904C5.556 5.728 4.802 7.44 4.804 9.26c0 .07.056.126.126.126z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouse4Bulk;
