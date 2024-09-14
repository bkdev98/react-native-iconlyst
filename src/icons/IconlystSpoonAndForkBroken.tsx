import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpoonAndForkBroken = ({
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
      d="M20.5 8.82c0 2.142-1.52 3.88-3.395 3.88s-3.394-1.738-3.394-3.88c0-3.214 1.52-5.82 3.395-5.82 1.11 0 2.095.913 2.714 2.324M17.105 12.7V21M3.5 8.234a3.243 3.243 0 0 0 6.487 0l-.203-5.21M3.705 3.023 3.603 5.63M6.744 11.477v9.412M6.744 7.806V3.023"
    />
  </Svg>
);
export default IconlystSpoonAndForkBroken;
