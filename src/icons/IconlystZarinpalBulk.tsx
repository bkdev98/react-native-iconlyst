import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZarinpalBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.96 16.369c.226 0 .41-.18.41-.41v-1.89a.41.41 0 0 0-.701-.29l-1.892 1.89a.41.41 0 0 0 .291.7zM8.074 15.929c.493.49 1.291.49 1.784 0l6.121-6.12a1.27 1.27 0 0 0 0-1.79 1.266 1.266 0 0 0-1.784 0l-6.121 6.12a1.27 1.27 0 0 0 0 1.79M7.627 8.039v1.89c0 .37.443.55.7.29l1.893-1.89a.41.41 0 0 0-.291-.7h-1.89a.41.41 0 0 0-.412.41"
    />
  </Svg>
);
export default IconlystZarinpalBulk;
