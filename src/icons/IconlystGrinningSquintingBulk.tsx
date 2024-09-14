import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrinningSquintingBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.716 2.5H8.282C5.123 2.5 3 4.721 3 8.026v7.948C3 19.279 5.123 21.5 8.282 21.5h8.433c3.16 0 5.285-2.221 5.285-5.526V8.026C22 4.721 19.876 2.5 16.716 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.521 9.647a.75.75 0 1 1-.795 1.27L14.89 9.77a.75.75 0 0 1 .002-1.273l1.836-1.142a.749.749 0 1 1 .791 1.275l-.814.506zM12.5 17.707c-2.269 0-4.115-1.693-4.115-3.773 0-.238.224-.43.5-.43h7.23c.276 0 .5.192.5.43 0 2.08-1.846 3.773-4.115 3.773M8.273 10.918a.749.749 0 1 1-.795-1.271l.816-.511-.814-.506a.75.75 0 0 1 .791-1.275l1.836 1.142a.75.75 0 0 1 .002 1.273z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrinningSquintingBulk;
