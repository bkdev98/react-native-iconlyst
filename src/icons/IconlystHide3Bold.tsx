import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHide3Bold = ({
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
      d="M18.495 11.163a10.1 10.1 0 0 0 2.412-3.279 1 1 0 1 0-1.817-.837c-1.314 2.847-4.032 4.616-7.091 4.616S6.221 9.894 4.907 7.047a1 1 0 1 0-1.817.837 10.1 10.1 0 0 0 2.417 3.283l-2.312 3.17a1 1 0 0 0 .219 1.396.997.997 0 0 0 1.396-.219l2.318-3.178a9.6 9.6 0 0 0 3.871 1.255v2.945a1 1 0 1 0 2 0v-2.945a9.6 9.6 0 0 0 3.875-1.258l2.32 3.181a.997.997 0 0 0 1.396.22.997.997 0 0 0 .219-1.397z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHide3Bold;
