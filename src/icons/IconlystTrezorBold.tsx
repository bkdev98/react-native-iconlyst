import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrezorBold = ({
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
      d="m9.178 9.173-.912.23V7.447c0-.999.405-1.975 1.111-2.679a3.82 3.82 0 0 1 2.683-1.11c1.013 0 1.966.394 2.684 1.11a3.8 3.8 0 0 1 1.111 2.68v1.953l-.914-.229a12 12 0 0 0-5.763 0m8.177.63V7.448a5.32 5.32 0 0 0-1.552-3.74 5.26 5.26 0 0 0-3.743-1.55 5.26 5.26 0 0 0-3.742 1.55 5.3 5.3 0 0 0-1.552 3.74v2.355A2.01 2.01 0 0 0 5.5 11.668v5.45c0 .767.426 1.458 1.113 1.807l4.548 2.272a2.04 2.04 0 0 0 1.8-.002l4.547-2.27a2.02 2.02 0 0 0 1.111-1.807v-5.45a2.01 2.01 0 0 0-1.264-1.865"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrezorBold;
