import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSitemapOutline = ({
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
      d="M8.257 5.869a3 3 0 0 1 3-3h2.506a3 3 0 0 1 0 6h-2.506a3 3 0 0 1-3-3m3-1.5a1.5 1.5 0 0 0 0 3h2.506a1.5 1.5 0 0 0 0-3zM2.747 18.369a3 3 0 0 1 3-3h2.506a3 3 0 1 1 0 6H5.747a3 3 0 0 1-3-3m3-1.5a1.5 1.5 0 1 0 0 3h2.506a1.5 1.5 0 0 0 0-3zM13.747 18.369a3 3 0 0 1 3-3h2.506a3 3 0 1 1 0 6h-2.506a3 3 0 0 1-3-3m3-1.5a1.5 1.5 0 1 0 0 3h2.506a1.5 1.5 0 0 0 0-3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.497 7.369a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h1.5a2.75 2.75 0 0 1 2.75 2.75v2a.75.75 0 0 1-1.5 0v-2c0-.69-.56-1.25-1.25-1.25h-1.5a2.74 2.74 0 0 1-2-.863 2.74 2.74 0 0 1-2 .863h-1.5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0v-2a2.75 2.75 0 0 1 2.75-2.75h1.5c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSitemapOutline;
