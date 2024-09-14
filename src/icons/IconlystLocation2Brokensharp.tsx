import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocation2Brokensharp = ({
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.649 9.739a2.4 2.4 0 1 0-2.4 2.4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M6.044 5.849c1.266-2.181 3.6-3.71 6.204-3.71 3.976 0 7.323 3.566 7.2 7.574-.178 5.824-7.2 8.727-7.2 12.426 0-3.603-7.022-6.72-7.2-12.426"
    />
  </Svg>
);
export default IconlystLocation2Brokensharp;
