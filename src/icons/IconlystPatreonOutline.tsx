import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPatreonOutline = ({
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
      fillRule="evenodd"
      d="M3.25 5.562c0-.858.696-1.554 1.554-1.554h2.414c.858 0 1.554.696 1.554 1.554v12.872c0 .858-.696 1.554-1.554 1.554H4.804a1.555 1.555 0 0 1-1.554-1.554zm1.554-.054a.054.054 0 0 0-.054.054v12.872c0 .03.024.054.054.054h2.414c.03 0 .054-.024.054-.054V5.562a.054.054 0 0 0-.054-.054zM15.419 5.508a3.831 3.831 0 1 0 0 7.662 3.831 3.831 0 0 0 0-7.662m-5.331 3.83a5.331 5.331 0 1 1 10.662 0 5.331 5.331 0 0 1-10.662 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPatreonOutline;
