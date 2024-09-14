import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMarkerRemoveBroken = ({
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
      d="M7.492 7.146a6.8 6.8 0 0 0-.758 8.816M17.1 16.754a6.8 6.8 0 0 1-8.108 1.204M19.041 11.996h2.209M12.25 3v2.209M12.25 18.793v2.209M3.25 12h2.209M18.804 13.75a6.5 6.5 0 0 0 .239-1.75 6.795 6.795 0 0 0-6.797-6.797c-.605 0-1.191.083-1.75.238M10.835 10.488a2.068 2.068 0 0 0 1.41 3.581c.597 0 1.137-.246 1.522-.65M20.18 19.832 5.008 4.66"
    />
  </Svg>
);
export default IconlystMarkerRemoveBroken;
