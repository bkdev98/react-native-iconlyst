import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnRightLineBold = ({
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
      d="M19 5.713a1 1 0 0 0-1 1v4.663a1 1 0 1 0 2 0V6.713a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19 17.681H9.958A3.963 3.963 0 0 1 6 13.722a3.96 3.96 0 0 1 3.958-3.958h3.918L12.641 11a.999.999 0 1 0 1.414 1.414l2.932-2.934a.99.99 0 0 0 .012-1.424h-.001L14.055 5.11a1 1 0 0 0-1.414 1.414l1.238 1.24H9.958A5.965 5.965 0 0 0 4 13.721a5.965 5.965 0 0 0 5.958 5.96H19a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnRightLineBold;
