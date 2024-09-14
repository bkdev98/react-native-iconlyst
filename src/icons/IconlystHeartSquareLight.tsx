import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartSquareLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.987 11.96c.471-1.469-.076-3.154-1.615-3.65a2.6 2.6 0 0 0-1.233-.087c-.411.07-.801.355-1.136.606-.336-.25-.725-.533-1.137-.602a2.65 2.65 0 0 0-1.232.084c-1.539.5-2.09 2.18-1.62 3.65.727 2.329 3.989 3.852 3.989 3.852s3.213-1.496 3.984-3.852"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartSquareLight;
