import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartSquareTwoTone = ({
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
      d="M8.282 3h8.435C19.665 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.282C5.334 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.343 3 8.282 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.487 11.96c.471-1.469-.076-3.154-1.615-3.65a2.6 2.6 0 0 0-1.233-.087c-.411.07-.801.355-1.136.606-.336-.25-.725-.533-1.137-.602a2.65 2.65 0 0 0-1.232.084c-1.539.5-2.09 2.18-1.62 3.65.727 2.329 3.989 3.852 3.989 3.852s3.213-1.496 3.984-3.852"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartSquareTwoTone;
