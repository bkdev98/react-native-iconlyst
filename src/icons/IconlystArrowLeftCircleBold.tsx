import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftCircleBold = ({
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
      d="m12 2 .28.004C17.67 2.152 22 6.574 22 12c0 5.51-4.48 10-10 10-5.51 0-10-4.49-10-10C2 6.48 6.49 2 12 2m1.98 6c-.3-.3-.77-.3-1.06 0l-3.49 3.47a.75.75 0 0 0 0 1.06L12.92 16c.14.15.33.22.52.22a.745.745 0 0 0 .53-1.28L11.02 12l2.95-2.94c.3-.29.3-.77.01-1.06"
    />
  </Svg>
);
export default IconlystArrowLeftCircleBold;
