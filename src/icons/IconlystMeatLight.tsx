import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMeatLight = ({
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
      d="M17.051 11.653a.94.94 0 0 0-.198-1.051l-2.955-2.955a.94.94 0 0 0-1.052-.199c-.618.281-1.196.772-1.972.644-2.174-.357-4.47.99-5.529 2.082-2.444 2.523-2.477 6.502 0 8.98 2.478 2.477 6.457 2.444 8.98 0 1.093-1.06 2.44-3.355 2.082-5.528-.128-.777.363-1.355.644-1.973"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.593 8.193 1.724-1.724a1.93 1.93 0 0 1-.723-1.507c0-1.08.881-1.962 1.961-1.962 1.091 0 2.022 1.14 1.646 2.3 1.15-.387 2.299.544 2.299 1.634a1.97 1.97 0 0 1-1.972 1.972c-.605 0-1.15-.287-1.506-.723l-1.794 1.794M9.583 16.485v.066m2.559.836v.066m.588-2.805v.067"
    />
  </Svg>
);
export default IconlystMeatLight;
