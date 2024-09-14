import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYenBold = ({
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
      d="M16.987 5.281a1 1 0 0 0-1.405.157L11.998 9.92 8.42 5.438a1 1 0 0 0-1.563 1.248l3.064 3.836H8.183a1 1 0 1 0 0 2h2.822v5.54a1 1 0 1 0 2 0v-5.54h2.814a1 1 0 1 0 0-2h-1.742l3.066-3.836a1 1 0 0 0-.157-1.405"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystYenBold;
