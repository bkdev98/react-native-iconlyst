import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserBrokensharp = ({
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.293 8.669v4.01M21.338 10.674h-4.09"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M10.205 21.25c-2.577.007-4.992-.475-7.043-1.726 1.02-3.222 3.783-4.713 7.043-4.705 3.256-.008 6.025 1.487 7.043 4.705-1.15.702-2.416 1.162-3.759 1.429M10.17 2.75a4.42 4.42 0 1 1-3.762 2.098"
    />
  </Svg>
);
export default IconlystAddUserBrokensharp;
