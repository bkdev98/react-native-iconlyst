import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp5Light = ({
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
      d="m3.836 19.455 7.242-13.44a1.047 1.047 0 0 1 1.843 0l7.243 13.44a1.047 1.047 0 0 1-.921 1.543H4.757a1.047 1.047 0 0 1-.921-1.543"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.688 3.748 12 5.435l-1.686-1.687M12 5.435V3M8.713 21 12 14.9l3.287 6.1M8.455 10.836l1.626 1.474 1.915-1.724 1.915 1.724 1.635-1.474"
    />
  </Svg>
);
export default IconlystCamp5Light;
