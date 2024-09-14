import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeboTwoTone = ({
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
      d="M11.19 17.38c.104.008 1.202.022 1.307.022a3.6 3.6 0 0 0 3.598-3.599c0-1.889-1.191-3.086-3.089-3.466l-.045-.01a1.785 1.785 0 1 1 .796-3.478c3.686.675 5.937 3.152 5.937 6.954A7.196 7.196 0 0 1 12.497 21c-.105 0-1.203-.011-1.307-.016"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.19 17.38a3.6 3.6 0 0 1-3.285-3.585V4.799a1.8 1.8 0 0 0-3.598 0v8.996a7.197 7.197 0 0 0 6.883 7.19"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBeboTwoTone;
