import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinterestSquareOutline = ({
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
      fill={props.color}
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.78V8.03c0-3.46 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.94c0 3.46-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.94c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.03c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M13.155 17.981c-1.04 0-1.99-.4-2.62-1.1-.66-.74-.92-1.74-.75-2.81.07-.41.46-.69.86-.62.41.07.69.45.62.86-.1.63.03 1.18.38 1.57.37.42.96.63 1.63.6 1.99-.11 3.06-2.05 3.06-3.82 0-2.25-1.8-3.94-4.18-3.94s-4.52 1.75-4.52 3.89c0 .33.05.66.14.97q.105.345.3.69c.2.36.07.82-.29 1.02s-.82.07-1.02-.29q-.27-.48-.42-.99-.21-.69-.21-1.41c0-2.97 2.7-5.39 6.02-5.39s5.68 2.34 5.68 5.44c0 2.46-1.57 5.16-4.49 5.32h-.21z"
    />
    <Path
      fill={props.color}
      d="M8.935 21.75c-.06 0-.11 0-.17-.02-.4-.09-.65-.5-.56-.9l2.16-9.21c.09-.4.5-.66.9-.56.4.09.65.5.56.9l-2.16 9.21c-.08.35-.39.58-.73.58"
    />
  </Svg>
);
export default IconlystPinterestSquareOutline;
