import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWindTwoTone = ({
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
      d="M7.155 18.576c-.458 0-1.06-.094-1.664-.34a4.14 4.14 0 0 1-2.436-3.774c0-2.596 1.834-4.12 4.103-4.14 0-1.632 1.28-4.898 4.897-4.898s4.898 3.266 4.898 4.898c2.269.02 4.102 1.544 4.102 4.14 0 1.68-.997 3.13-2.433 3.78a4.6 4.6 0 0 1-1.673.334h-3.625a3.835 3.835 0 0 1-3.834-3.835 3.27 3.27 0 0 1 3.267-3.267c1.401 0 2.537 1.135 2.537 2.536 0 .897-.494 1.598-1.255 1.864"
    />
  </Svg>
);
export default IconlystCloudWindTwoTone;
