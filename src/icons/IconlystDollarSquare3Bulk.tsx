import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSquare3Bulk = ({
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
      d="M16.217 2.563H7.783c-3.16 0-5.283 2.222-5.283 5.53v7.95c0 3.302 2.123 5.52 5.283 5.52h8.433c3.161 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.75 15.682h.066c1.202 0 2.18-.978 2.18-2.18s-.978-2.18-2.18-2.18h-1.635a.68.68 0 0 1 0-1.36h2.656a.75.75 0 0 0 0-1.5H12.75v-.46a.75.75 0 0 0-1.5 0v.46h-.069a2.18 2.18 0 0 0-2.179 2.18c0 1.202.977 2.18 2.179 2.18h1.635a.68.68 0 0 1 0 1.36h-2.655a.75.75 0 0 0 0 1.5h1.089v.45a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystDollarSquare3Bulk;
