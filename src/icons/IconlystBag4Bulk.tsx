import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag4Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.5 10.404v6.3c0 2.69-1.73 4.49-4.3 4.49H6.79c-2.56 0-4.29-1.8-4.29-4.49v-6.3c0-2.69 1.73-4.49 4.29-4.49H17.2c2.57 0 4.3 1.8 4.3 4.49"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.11 5.915v-.14a2.97 2.97 0 0 0-2.97-2.97h-2.28a2.97 2.97 0 0 0-2.97 2.97v.14h1.5v-.14c0-.81.66-1.47 1.47-1.47h2.28c.81 0 1.47.66 1.47 1.47v.14zM7.52 10.134a.75.75 0 0 0-.75.75v5.87a.75.75 0 0 0 1.5 0v-5.87a.75.75 0 0 0-.75-.75M12 10.134a.75.75 0 0 0-.75.75v5.87a.75.75 0 0 0 1.5 0v-5.87a.75.75 0 0 0-.75-.75M16.48 10.134a.75.75 0 0 0-.75.75v5.87a.75.75 0 0 0 1.5 0v-5.87a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag4Bulk;
