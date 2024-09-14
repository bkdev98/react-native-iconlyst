import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber9Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 5.133a3.822 3.822 0 0 0 0 7.643h3.821V8.954A3.82 3.82 0 0 0 12.5 5.133m5.321 3.821a5.322 5.322 0 1 0-5.321 5.321h3.821v1.536c0 2.11-1.71 3.822-3.821 3.822H9.256a.75.75 0 0 0 0 1.5H12.5a5.32 5.32 0 0 0 5.321-5.322z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber9Outline;
