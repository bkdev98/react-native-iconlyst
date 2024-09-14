import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelecabinBroken = ({
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
      d="M12.445 20.998h3.637a3.405 3.405 0 0 0 3.519-3.688v-5.837a3.395 3.395 0 0 0-3.519-3.687H7.91a3.397 3.397 0 0 0-3.51 3.687v5.837a3.406 3.406 0 0 0 3.51 3.688h1.043M13.775 17.789h-3.548"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.736 10.667H8.595a1.126 1.126 0 0 0-1.164 1.22v1.933a1.127 1.127 0 0 0 1.164 1.22h6.803a1.125 1.125 0 0 0 1.163-1.22v-1.933a1.118 1.118 0 0 0-1.163-1.22h-.701M6.107 4.286 17.893 3M12 3.638v4.147"
    />
  </Svg>
);
export default IconlystTelecabinBroken;
