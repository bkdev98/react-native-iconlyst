import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger3Broken = ({
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
      d="M9.828 7.489a2.198 2.198 0 0 1 2.793-2.113 2.16 2.16 0 0 1 1.507 1.484 2.2 2.2 0 0 1-1.305 2.672 1.24 1.24 0 0 0-.804 1.146v.486l7.566 3.133a2.29 2.29 0 0 1-.876 4.406h-5.526M9.699 11.975l-5.3 2.242A2.29 2.29 0 0 0 3 16.327v.086a2.29 2.29 0 0 0 2.29 2.29h4.538"
    />
  </Svg>
);
export default IconlystCoatHanger3Broken;
