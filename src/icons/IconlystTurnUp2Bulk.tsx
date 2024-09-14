import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnUp2Bulk = ({
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
      d="M16.616 15.406a6.15 6.15 0 0 1-6.143 6.143 6.15 6.15 0 0 1-6.144-6.143v-2.79a1 1 0 0 1 2 0v2.79a4.15 4.15 0 0 0 4.144 4.143 4.15 4.15 0 0 0 4.143-4.143V8.713h2z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m14.834 3.687-2.44 3.317a1.072 1.072 0 0 0 .864 1.71l1.368-.001h3.513a1.075 1.075 0 0 0 .865-1.71l-2.441-3.316a1.072 1.072 0 0 0-1.729 0"
    />
  </Svg>
);
export default IconlystTurnUp2Bulk;
