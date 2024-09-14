import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownLeftBoxBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.231 4.25h-1.98C5.638 4.25 4 6.1 4 8.718v7.064C4 18.4 5.63 20.25 8.25 20.25M20 14.234v1.548c0 2.618-1.631 4.468-4.252 4.468h-3.749M12.744 7.2v4.304m0 0h4.305m-4.305 0 6.75-6.75"
    />
  </Svg>
);
export default IconlystDownLeftBoxBroken;
