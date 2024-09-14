import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPeriscopeLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.1 21c1.423 0 7.057-6.328 7.057-10.572C19.157 6.367 15.953 3 12.1 3c-4.053 0-7.257 3.366-7.257 7.428C4.844 14.672 10.478 21 12.1 21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.997 13.866a3.648 3.648 0 1 0-.437-7.27 2.28 2.28 0 0 1-3.185 3.185 3.648 3.648 0 0 0 3.622 4.085Z"
    />
  </Svg>
);
export default IconlystPeriscopeLight;
