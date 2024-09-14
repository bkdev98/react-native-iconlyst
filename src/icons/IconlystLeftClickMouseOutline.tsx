import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftClickMouseOutline = ({
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
      d="M4.805 9.297C4.804 5.363 8.18 2.25 12.25 2.25c4.067 0 7.445 3.11 7.446 7.045v5.408c.002 3.934-3.376 7.047-7.444 7.047s-7.445-3.11-7.445-7.044zm1.5 0 .002 5.409c0 3.019 2.617 5.544 5.945 5.544s5.946-2.527 5.945-5.547l-.001-5.408c-.001-3.02-2.619-5.545-5.946-5.545-3.328 0-5.946 2.527-5.945 5.547"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.253 2.254a.75.75 0 0 1 .75.75V8.85c0 .916-.744 1.656-1.658 1.656h-5.79a.75.75 0 1 1 0-1.5h5.79a.157.157 0 0 0 .158-.156V3.004a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftClickMouseOutline;
