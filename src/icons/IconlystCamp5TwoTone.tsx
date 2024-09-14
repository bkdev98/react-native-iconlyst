import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp5TwoTone = ({
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
      d="m4.336 19.455 7.242-13.44a1.047 1.047 0 0 1 1.843 0l7.243 13.44a1.047 1.047 0 0 1-.921 1.543H5.257a1.047 1.047 0 0 1-.921-1.543"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.188 3.748 12.5 5.435l-1.686-1.687M12.5 5.435V3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.213 21 3.288-6.1 3.287 6.1M8.955 10.836l1.626 1.474 1.915-1.724 1.915 1.724 1.635-1.474"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCamp5TwoTone;
