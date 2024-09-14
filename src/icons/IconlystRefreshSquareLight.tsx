import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquareLight = ({
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
      d="m11.418 21 1.733-1.738-1.728-1.723M12.579 3l-1.733 1.739 1.728 1.724M20.999 12.582l-1.739-1.734-1.723 1.729M3 11.422l1.739 1.734 1.723-1.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.297 10.945c.044.351.072.713.072 1.075a7.38 7.38 0 0 1-3.078 6M13.054 19.298a9 9 0 0 1-1.074.072 7.38 7.38 0 0 1-6.001-3.077M4.703 13.056a9 9 0 0 1-.072-1.074A7.38 7.38 0 0 1 7.708 5.98M10.945 4.7a9 9 0 0 1 1.075-.071 7.38 7.38 0 0 1 6 3.077"
    />
  </Svg>
);
export default IconlystRefreshSquareLight;
