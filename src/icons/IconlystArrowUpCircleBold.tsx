import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpCircleBold = ({
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
      d="M12 2c5.52 0 10 4.49 10 10l-.004.28C21.848 17.67 17.426 22 12 22 6.49 22 2 17.52 2 12 2 6.49 6.49 2 12 2m0 7.21c-.2 0-.39.08-.53.22L8 12.92c-.15.14-.22.33-.22.52a.745.745 0 0 0 1.28.53L12 11.02l2.94 2.95c.29.3.77.3 1.06.01.3-.3.3-.77 0-1.06l-3.47-3.49a.75.75 0 0 0-.53-.22"
    />
  </Svg>
);
export default IconlystArrowUpCircleBold;
