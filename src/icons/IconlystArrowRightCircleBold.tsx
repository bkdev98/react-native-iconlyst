import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightCircleBold = ({
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
      d="M12 2c5.51 0 10 4.49 10 10 0 5.52-4.49 10-10 10l-.28-.004C6.33 21.848 2 17.426 2 12 2 6.49 6.48 2 12 2m-1.44 5.78a.745.745 0 0 0-.53 1.28L12.98 12l-2.95 2.94c-.3.29-.3.77-.01 1.06.3.3.77.3 1.06 0l3.49-3.47a.75.75 0 0 0 0-1.06L11.08 8a.7.7 0 0 0-.52-.22"
    />
  </Svg>
);
export default IconlystArrowRightCircleBold;
