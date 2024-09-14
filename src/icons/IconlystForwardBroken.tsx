import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardBroken = ({
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
      d="M21.226 9.88c1.372 1.273 1.34 3.014 0 4.239-1.568 1.45-3.371 2.578-5.382 3.41-1.571.666-3.174-.096-3.408-1.892-.254-2.277-.26-4.717 0-7.265.214-1.73 1.67-2.592 3.408-1.901.98.399 1.917.888 2.79 1.438"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.436 15.637c.233 1.796 1.837 2.558 3.408 1.892 2.01-.832 3.814-1.96 5.382-3.41 1.34-1.225 1.372-2.966 0-4.238a18.4 18.4 0 0 0-5.382-3.41c-1.739-.69-3.194.172-3.408 1.9a37 37 0 0 0-.186 3.038"
    />
  </Svg>
);
export default IconlystForwardBroken;
