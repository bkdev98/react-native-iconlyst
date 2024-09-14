import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareDownBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.497 7.853c-1.59.721-2.428 1.941-2.597 3.807h1.299c.502 0 .957.297 1.159.755.206.463.122.984-.219 1.359a3026 3026 0 0 1-3.551 3.93 1.26 1.26 0 0 1-.932.413l-.023-.001a1.27 1.27 0 0 1-.948-.452l-3.323-3.919a1.26 1.26 0 0 1-.181-1.356c.21-.45.649-.729 1.145-.729h.972c.137-1.652.739-2.951 1.795-3.867 2.062-1.79 5.072-1.385 5.2-1.366.33.048.589.307.637.636a.75.75 0 0 1-.433.79m-.279-5.103H7.783C4.623 2.75 2.5 4.973 2.5 8.28v7.94c0 3.307 2.123 5.53 5.284 5.53h8.434c3.159 0 5.282-2.223 5.282-5.53V8.28c0-3.307-2.123-5.53-5.282-5.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.367 12.41c0-1.804.44-3.234 1.337-4.316-.566.154-1.146.413-1.634.838-.864.753-1.302 1.924-1.302 3.479a.75.75 0 0 1-.75.75H8.833l2.826 3.334c.747-.824 2.064-2.282 3.014-3.334h-1.556a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplyShareDownBold;
