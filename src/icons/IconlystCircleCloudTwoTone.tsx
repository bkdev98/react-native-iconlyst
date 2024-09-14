import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleCloudTwoTone = ({
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
      d="M12.5 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.64 10.784c-1.282.011-2.318.872-2.318 2.34A2.34 2.34 0 0 0 8.7 15.257c.342.138.682.191.94.191h5.534c.259 0 .6-.05.946-.189a2.34 2.34 0 0 0 1.375-2.135c0-1.468-1.037-2.329-2.319-2.34 0-.923-.723-2.768-2.767-2.768S9.641 9.86 9.641 10.784"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleCloudTwoTone;
