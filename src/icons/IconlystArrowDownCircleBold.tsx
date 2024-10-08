import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownCircleBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M12 2c5.51 0 10 4.48 10 10 0 5.51-4.49 10-10 10-5.52 0-10-4.49-10-10C2 6.48 6.48 2 12 2m-2.94 8.03c-.29-.3-.77-.3-1.06-.01-.3.3-.3.77 0 1.06l3.47 3.49a.75.75 0 0 0 1.06 0L16 11.08c.15-.14.22-.33.22-.52a.745.745 0 0 0-1.28-.53L12 12.98Z"
    />
  </Svg>
);
export default IconlystArrowDownCircleBold;
