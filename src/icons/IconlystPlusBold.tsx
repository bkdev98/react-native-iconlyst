import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlusBold = ({
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
      d="M16.66 2C20.06 2 22 3.92 22 7.33v9.34c0 3.39-1.93 5.33-5.33 5.33H7.33C3.92 22 2 20.06 2 16.67V7.33C2 3.92 3.92 2 7.33 2Zm-4.67 5.51c-.46 0-.83.37-.83.83v2.82H8.33c-.22 0-.43.09-.59.24a.87.87 0 0 0-.24.59c0 .46.37.83.83.84h2.83v2.83c0 .46.37.83.83.83s.83-.37.83-.83v-2.83h2.84c.46-.01.83-.38.83-.84s-.37-.83-.83-.83h-2.84V8.34c0-.46-.37-.83-.83-.83"
    />
  </Svg>
);
export default IconlystPlusBold;
