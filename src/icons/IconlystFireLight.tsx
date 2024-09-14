import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFireLight = ({
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
      d="M9.248 10.606c-1.432-1.76-2.782-2.69-3.703-2.816 0 2.816-2.976 7.389 1.165 11.175 7.474 5.945 16.56-2.214 11.157-10.61-.497 2.06-2.27 3.085-2.27 3.085C13.921 7.79 13.395 3 13.395 3c-3.577 1.589-4.531 5.771-4.147 7.606"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.248 17.745c.259-1.76 1.265-2.11 2.35-3.986 1.195 2.51 5.253 4.47 2.637 6.55-2.063 1.64-5.393.192-4.987-2.564"
    />
  </Svg>
);
export default IconlystFireLight;
