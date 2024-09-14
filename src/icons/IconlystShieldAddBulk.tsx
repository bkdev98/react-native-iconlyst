import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldAddBulk = ({
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
      d="M19.355 5.136C18.652 4.43 13.025 2.5 12 2.5S5.347 4.43 4.643 5.136c-.56.564-.552.998-.509 3.405.018.973.042 2.298.042 4.129 0 6.407 7.602 8.785 7.68 8.808a.48.48 0 0 0 .29 0c.076-.023 7.678-2.401 7.678-8.808 0-1.827.024-3.15.041-4.121.044-2.415.051-2.849-.51-3.413"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.75 12.53h1.787a.75.75 0 0 0 0-1.5H12.75V9.237a.75.75 0 0 0-1.5 0v1.791H9.464a.75.75 0 0 0 0 1.5h1.786v1.79a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystShieldAddBulk;