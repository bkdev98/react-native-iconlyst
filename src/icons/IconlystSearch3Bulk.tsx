import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearch3Bulk = ({
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
      d="M11.252 2.625c-4.742 0-8.6 3.857-8.6 8.6s3.858 8.6 8.6 8.6c4.743 0 8.601-3.858 8.601-8.6 0-4.743-3.858-8.6-8.6-8.6"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.582 17.844a1.765 1.765 0 1 0-.002 3.53 1.765 1.765 0 0 0 .002-3.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearch3Bulk;
