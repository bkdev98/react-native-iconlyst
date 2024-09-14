import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCipherBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m16.695 14.064 1.617-1.62a.63.63 0 0 0 0-.89l-1.617-1.61a.616.616 0 0 0-.885 0l-1.617 1.61a.633.633 0 0 0 0 .89l1.617 1.62c.245.24.64.24.885 0M12.943 17.814l1.617-1.61a.63.63 0 0 0 0-.89l-1.617-1.62a.634.634 0 0 0-.885 0l-1.617 1.62a.633.633 0 0 0 0 .89l1.617 1.61c.245.25.64.25.885 0M6.687 12.444l1.617 1.62c.245.24.64.24.885 0l1.617-1.62a.63.63 0 0 0 0-.89l-1.617-1.61a.616.616 0 0 0-.885 0l-1.617 1.61a.633.633 0 0 0 0 .89M12.056 6.184l-1.617 1.62a.633.633 0 0 0 0 .89l1.617 1.61c.245.25.64.25.885 0l1.617-1.61a.63.63 0 0 0 0-.89l-1.617-1.62a.634.634 0 0 0-.885 0"
    />
  </Svg>
);
export default IconlystCipherBulk;
