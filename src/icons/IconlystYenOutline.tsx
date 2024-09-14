import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYenOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.42 5.476a.75.75 0 0 1 1.054.118l3.774 4.726 3.778-4.726a.75.75 0 0 1 1.172.937l-4.364 5.46a.75.75 0 0 1-1.172-.001l-4.36-5.46a.75.75 0 0 1 .118-1.054"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.684 11.516a.75.75 0 0 1 .75-.75h7.636a.75.75 0 0 1 0 1.5H8.434a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.254 10.766a.75.75 0 0 1 .75.75v6.545a.75.75 0 0 1-1.5 0v-6.545a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystYenOutline;
