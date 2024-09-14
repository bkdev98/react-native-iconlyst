import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldTimeOutline = ({
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
      d="M17.596 14.492a2.879 2.879 0 1 0 0 5.758 2.879 2.879 0 0 0 0-5.758m-4.38 2.879a4.379 4.379 0 1 1 8.758 0 4.379 4.379 0 0 1-8.757 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.574 15.406a.75.75 0 0 1 .75.75v1.05l.782.467a.75.75 0 1 1-.77 1.287l-1.147-.686a.75.75 0 0 1-.365-.643v-1.475a.75.75 0 0 1 .75-.75M11.955 3.75a7.93 7.93 0 0 0-7.93 7.93 7.933 7.933 0 0 0 7.285 7.913.75.75 0 1 1-.12 1.495 9.433 9.433 0 0 1-8.665-9.409c0-5.2 4.22-9.429 9.43-9.429 4.819 0 8.782 3.611 9.35 8.273a.75.75 0 1 1-1.488.182 7.92 7.92 0 0 0-7.862-6.955"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.428 4.243c.55-1.046 1.384-1.993 2.525-1.993 1.146 0 1.98.946 2.53 1.993.579 1.104 1.005 2.61 1.239 4.315a21 21 0 0 1 .196 2.208.75.75 0 1 1-1.499.055 19 19 0 0 0-.182-2.05l-.001-.007c-.219-1.6-.61-2.924-1.082-3.824-.502-.958-.956-1.19-1.2-1.19-.24 0-.694.231-1.198 1.19-.474.9-.866 2.225-1.085 3.824v.006c-.13.901-.2 1.876-.2 2.91 0 1.032.07 2.016.2 2.918v.004c.302 2.189 1.232 4.245 2.132 5.233a.75.75 0 1 1-1.108 1.01c-1.159-1.27-2.179-3.637-2.51-6.036a22 22 0 0 1-.214-3.13c0-1.099.074-2.145.214-3.12.233-1.706.662-3.212 1.243-4.316"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.525 11.691a.75.75 0 0 1 .75-.75h8.288a.75.75 0 1 1 0 1.5H3.274a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldTimeOutline;
