import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBazarSquareOutline = ({
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
      d="M16.21 21.75H7.78c-3.31 0-5.53-2.32-5.53-5.78V8.03c0-3.46 2.22-5.78 5.53-5.78h8.44c3.31 0 5.53 2.32 5.53 5.78v7.94c0 3.46-2.22 5.78-5.53 5.78zm-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.94c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.03c0-2.6-1.58-4.28-4.03-4.28H7.77z"
    />
    <Path
      fill={props.color}
      d="M12 17.76c-2.36 0-5.29-1.26-5.81-7.26a1.6 1.6 0 0 1 1.09-1.64c.58-.19 1.29-.34 2.86-.5 1.23-.12 2.48-.12 3.72 0 1.57.16 2.28.32 2.86.5.7.23 1.16.92 1.09 1.64-.53 6-3.45 7.26-5.81 7.26m0-8q-.855 0-1.71.09c-1.6.16-2.16.31-2.55.44l-.06.08c.52 5.9 3.38 5.9 4.32 5.9s3.8 0 4.32-5.9c0-.03-.02-.07-.06-.08-.39-.12-.95-.27-2.55-.44q-.855-.09-1.71-.09"
    />
    <Path
      fill={props.color}
      d="M9.61 11.162c-.05 0-.11 0-.16-.02a.75.75 0 0 1-.57-.89c.4-1.78 1.15-4.15 3.12-4.15s2.73 2.33 3.12 4.09c.09.4-.17.81-.57.89-.41.09-.8-.17-.89-.57-.43-1.93-.98-2.91-1.66-2.91-.83 0-1.36 1.62-1.66 2.97-.08.35-.39.59-.73.59"
    />
  </Svg>
);
export default IconlystBazarSquareOutline;
