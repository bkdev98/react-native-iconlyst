import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthShieldBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 20.11c-4.934-.74-8.217-5.907-6.803-10.718A8.435 8.435 0 0 1 14.68 3.674c.073.027.154.046.227.073a8.44 8.44 0 0 1 5.726 6.65"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.446 19.227s1.223-2.121.006-3.82C7.236 13.71 7.18 13.012 7.405 12.36c.458-1.327 2.28-1.321 1.549-4.074a17 17 0 0 0-.47-1.467M20.634 10.394c-.825-.306-2.433-.505-5.16.453-2.56.9-2.739-1.559-1.672-4.591M20.479 15.368s-2.424-.999-2.81-.999c-.385 0-2.573.76-2.81 1-.235.236-.13.157-.13 2.611 0 2.453 2.94 3.343 2.94 3.343s2.94-.889 2.94-3.343"
    />
  </Svg>
);
export default IconlystEarthShieldBroken;
