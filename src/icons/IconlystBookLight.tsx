import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookLight = ({
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
      d="M7.327 16.027H19.72l.006 3.78A1.2 1.2 0 0 1 18.53 21H7.327a2.486 2.486 0 1 1 0-4.974"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.84 18.513V5.591A2.59 2.59 0 0 1 7.43 3h11.092a1.2 1.2 0 0 1 1.199 1.199v11.827M9.39 7.133h2.745m-2.744 3.986h5.443"
    />
  </Svg>
);
export default IconlystBookLight;
