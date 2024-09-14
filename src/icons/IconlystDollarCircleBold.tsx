import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarCircleBold = ({
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
      d="M11.043 9.843a.8.8 0 0 0 0 1.6h.207v-1.6zM13.019 12.942h-.269v1.48h.269a.74.74 0 0 0 0-1.48"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.019 15.923h-.269v.19a.75.75 0 0 1-1.5 0v-.19h-.473a2.04 2.04 0 0 1-2.033-2.04.75.75 0 0 1 1.5 0c0 .298.239.54.533.54h.473v-1.48h-.207a2.3 2.3 0 0 1-2.299-2.3c0-1.27 1.031-2.3 2.299-2.3h.207v-.33a.75.75 0 0 1 1.5 0v.33h.475c1.121 0 2.033.91 2.033 2.03 0 .414-.336.79-.75.79s-.75-.296-.75-.71v-.08a.54.54 0 0 0-.533-.53h-.475v1.6h.269a2.24 2.24 0 0 1 2.24 2.24 2.243 2.243 0 0 1-2.24 2.24M12 2.563c-5.238 0-9.5 4.26-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarCircleBold;
