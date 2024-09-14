import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinterestCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M12.81 15.11c-.83 0-1.58-.31-2.08-.88-.53-.59-.74-1.39-.6-2.25.07-.41.45-.69.86-.62s.69.45.62.86.01.75.24 1c.24.27.61.4 1.06.38 1.36-.08 2.09-1.42 2.09-2.64 0-1.56-1.25-2.73-2.91-2.73-1.74 0-3.16 1.21-3.16 2.69 0 .23.03.45.1.66.05.17.12.33.2.48.2.36.07.82-.29 1.02s-.82.07-1.02-.29c-.14-.24-.25-.51-.33-.78-.11-.36-.16-.72-.16-1.09 0-2.31 2.09-4.19 4.66-4.19s4.41 1.82 4.41 4.23c0 1.91-1.23 4.01-3.51 4.14h-.17z"
    />
    <Path
      fill={props.color}
      d="M9.84 17.262c-.06 0-.11 0-.17-.02-.4-.09-.65-.5-.56-.9l1.37-5.85c.09-.4.5-.66.9-.56.4.09.65.5.56.9l-1.37 5.85c-.08.35-.39.58-.73.58"
    />
  </Svg>
);
export default IconlystPinterestCircleOutline;
