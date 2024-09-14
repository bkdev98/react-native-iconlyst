import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseModernOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.805 9.297C4.804 5.363 8.182 2.25 12.252 2.25c4.066 0 7.443 3.11 7.444 7.045v5.408c.002 3.934-3.376 7.047-7.444 7.047s-7.445-3.11-7.445-7.044zm1.5 0 .002 5.409c0 3.019 2.617 5.544 5.945 5.544s5.946-2.527 5.945-5.547l-.001-5.408c-.001-3.02-2.618-5.545-5.945-5.545-3.329 0-5.947 2.527-5.946 5.547"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.252 2.25a.75.75 0 0 1 .75.75v6.738a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouseModernOutline;
