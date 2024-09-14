import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunRightLight = ({
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
      d="M11.755 7.664a4.335 4.335 0 1 1 0 8.67 4.335 4.335 0 0 1 0-8.67"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.055 12h-1.418M18.33 5.423l-1.003 1.003m.773 11.935-.773-.788M12.033 3.02A8.98 8.98 0 0 0 3.055 12c0 4.96 4.018 8.98 8.978 8.98"
    />
  </Svg>
);
export default IconlystSunRightLight;
