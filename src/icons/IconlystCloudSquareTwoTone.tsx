import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSquareTwoTone = ({
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
      d="M7.837 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H7.837c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.055 5.081 4.897 3 7.837 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.334 11.068c-1.26.011-2.28.858-2.28 2.3a2.3 2.3 0 0 0 1.354 2.096c.336.137.67.19.925.19h5.44c.255 0 .59-.05.93-.187a2.3 2.3 0 0 0 1.352-2.1c0-1.441-1.018-2.288-2.279-2.3 0-.906-.712-2.72-2.721-2.72s-2.72 1.814-2.72 2.72"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudSquareTwoTone;
