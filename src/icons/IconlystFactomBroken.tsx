import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFactomBroken = ({
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
      d="m15.42 17.752-.376.203c-2.629 1.348-5.103 1.986-6.309 1.705M20.544 9.299c-.109 1.502-2.749 4.03-6.463 6.008l-.218.113M9.366 17.23c-1.686.455-3.06.526-3.811.15M20.689 13.34c-.375.864-1.502 2.005-3.12 3.113M19.437 17.584c-.424.676-1.502 1.555-2.872 2.29-1.296.692-2.543 1.09-3.35 1.127M16.501 4.314c.594 1.127-1.836 3.568-5.422 5.487a19 19 0 0 1-1.153.575M12.652 12.628c-4.281 2.29-8.344 3.072-9.05 1.754M19.13 6.094c.53.993-.977 2.89-3.577 4.744M6.542 11.585c-1.566.375-2.719.277-3.042-.327M10.178 6.598q-.31.179-.642.376c-2.366 1.265-4.6 1.697-4.991.969C4.3 7.486 4.84 6.68 5.86 5.83M8.128 4.334c2.37-1.266 4.619-1.712 4.995-.984.187.353-.094.916-.703 1.547"
    />
  </Svg>
);
export default IconlystFactomBroken;
