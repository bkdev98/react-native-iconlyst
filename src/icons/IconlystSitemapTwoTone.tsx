import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSitemapTwoTone = ({
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
      strokeWidth={1.5}
      d="M9.007 5.869a2.25 2.25 0 0 1 2.25-2.25h2.506a2.25 2.25 0 0 1 0 4.5h-2.506a2.25 2.25 0 0 1-2.25-2.25ZM3.497 18.369a2.25 2.25 0 0 1 2.25-2.25h2.506a2.25 2.25 0 1 1 0 4.5H5.747a2.25 2.25 0 0 1-2.25-2.25ZM14.497 18.369a2.25 2.25 0 0 1 2.25-2.25h2.506a2.25 2.25 0 1 1 0 4.5h-2.506a2.25 2.25 0 0 1-2.25-2.25Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.497 8.119v2m0 0a2 2 0 0 0 2 2h1.5a2 2 0 0 1 2 2v2m-5.5-6a2 2 0 0 1-2 2h-1.5a2 2 0 0 0-2 2v2"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSitemapTwoTone;
