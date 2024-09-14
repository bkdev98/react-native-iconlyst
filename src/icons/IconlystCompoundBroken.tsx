import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCompoundBroken = ({
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
      d="M20.256 13.98v2.11a.78.78 0 0 1-.33.63l-5.597 4.126a.8.8 0 0 1-.826.072l-8.568-4.24a.78.78 0 0 1-.435-.693v-2.923a.788.788 0 0 1 1.125-.69l3.364 1.661M10.817 8.722V3.77a.788.788 0 0 1 1.126-.694l7.877 3.879a.78.78 0 0 1 .436.694v2.613"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.954 21v-4.044a.78.78 0 0 0-.45-.694l-1.97-.973M17.104 18.805v-6.501a.77.77 0 0 0-.435-.683L8.791 7.742a.788.788 0 0 0-1.125.694v2.024"
    />
  </Svg>
);
export default IconlystCompoundBroken;
