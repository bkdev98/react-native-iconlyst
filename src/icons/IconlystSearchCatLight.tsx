import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCatLight = ({
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
      d="M10.804 20.587c-1.473.448-2.838.614-3.65.63.072-1.459.267-3.123.634-5.2.307-1.739-.958-2.975-2.428-2.975-1.952 0-2.837-2.345-2.56-3.463 1.014 0 1.71-.546 2.132-1.573.731-1.78 2.21-2.235 3.95-2.235V2.938c3.112 1.289 5.54 3.795 6.16 7.192M8.277 9.086v.015M20.018 17.24a3.115 3.115 0 1 0-6.23 0 3.115 3.115 0 0 0 6.23 0M19.023 19.521l1.791 1.787"
    />
  </Svg>
);
export default IconlystSearchCatLight;
