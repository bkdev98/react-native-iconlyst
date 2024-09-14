import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRecordCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75a8.25 8.25 0 1 0 8.25 8.249 8.25 8.25 0 0 0-8.25-8.249M2.5 11.999c0-5.384 4.366-9.749 9.75-9.749S22 6.615 22 11.999s-4.366 9.75-9.75 9.75-9.75-4.366-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 10.049a1.95 1.95 0 1 0 .001 3.9 1.95 1.95 0 0 0 0-3.9m-3.45 1.95a3.45 3.45 0 1 1 6.901 0 3.45 3.45 0 0 1-6.9 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRecordCircleOutline;
