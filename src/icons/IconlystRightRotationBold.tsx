import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightRotationBold = ({
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
      d="M20 6.809a1 1 0 0 0-1 1V9.58c-1.733-1.73-4.097-2.772-6.62-2.772-5.172 0-9.38 4.208-9.38 9.38a1 1 0 1 0 2 0c0-4.07 3.311-7.38 7.38-7.38 2.287 0 4.414 1.084 5.794 2.84H15.16a1 1 0 1 0 0 2h4.844c.03-.001.06-.015.093-.018A.99.99 0 0 0 21 12.65V7.809a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightRotationBold;
