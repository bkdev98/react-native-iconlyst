import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftRotationBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.62 7.059c-2.522 0-4.887 1.043-6.62 2.773V8.059a1 1 0 1 0-2 0v4.84a.99.99 0 0 0 .901.98c.033.005.065.02.098.02h4.842a1 1 0 0 0 0-2H5.826c1.381-1.756 3.507-2.84 5.794-2.84 4.069 0 7.38 3.31 7.38 7.38a1 1 0 1 0 2 0c0-5.172-4.208-9.38-9.38-9.38"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftRotationBold;
