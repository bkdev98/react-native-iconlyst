import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber3Light = ({
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
      d="M6.65 5.183a1.8 1.8 0 0 1 1.8-1.8h8.1a1.8 1.8 0 0 1 1.376 2.96L15.08 9.718c1.927 1.062 3.257 3.064 3.257 5.425 0 3.522-2.958 6.24-6.44 6.24a6.54 6.54 0 0 1-4.531-1.803 1.8 1.8 0 1 1 2.489-2.6 2.94 2.94 0 0 0 2.042.803c1.646 0 2.84-1.255 2.84-2.64s-1.196-2.642-2.84-2.642a1.8 1.8 0 0 1-1.376-2.96l2.157-2.558H8.45a1.8 1.8 0 0 1-1.8-1.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber3Light;
