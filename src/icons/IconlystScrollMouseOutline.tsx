import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScrollMouseOutline = ({
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
      d="M4.805 9.297C4.804 5.363 8.18 2.25 12.25 2.25c4.067 0 7.445 3.11 7.446 7.045v5.408c.002 3.934-3.376 7.047-7.444 7.047s-7.445-3.11-7.446-7.044zM12.25 3.75c-3.328 0-5.946 2.527-5.945 5.547v5.409c.002 3.019 2.62 5.544 5.947 5.544s5.946-2.527 5.945-5.547l-.001-5.408c-.001-3.02-2.619-5.545-5.946-5.545"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.407 10.923a.75.75 0 0 1 1.06 0l.782.781.782-.781a.75.75 0 1 1 1.06 1.06l-1.312 1.312a.75.75 0 0 1-1.06 0l-1.312-1.312a.75.75 0 0 1 0-1.06M11.719 5.94a.75.75 0 0 1 1.06 0l1.313 1.312a.75.75 0 0 1-1.06 1.06l-.783-.78-.781.78a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 5.742a.75.75 0 0 1 .75.75v6.276a.75.75 0 0 1-1.5 0V6.492a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScrollMouseOutline;
