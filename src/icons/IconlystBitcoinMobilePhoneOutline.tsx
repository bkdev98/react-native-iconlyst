import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinMobilePhoneOutline = ({
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
      d="M15.007 21.75H9.492a4.37 4.37 0 0 1-4.367-4.367V6.619A4.374 4.374 0 0 1 9.493 2.25h5.515a4.374 4.374 0 0 1 4.368 4.368v10.764a4.374 4.374 0 0 1-4.369 4.368m-5.515-18a2.873 2.873 0 0 0-2.868 2.869v10.764a2.87 2.87 0 0 0 2.867 2.867h5.515a2.87 2.87 0 0 0 2.869-2.868V6.618a2.87 2.87 0 0 0-2.868-2.868z"
    />
    <Path
      fill={props.color}
      d="M12.762 13.902h-2.176a.75.75 0 0 1-.75-.75v-3.023a.75.75 0 0 1 .75-.75h2.112a2.315 2.315 0 0 1 2.317 2.043 2.26 2.26 0 0 1-2.253 2.48m-1.426-1.5h1.426a.76.76 0 0 0 .759-.839.8.8 0 0 0-.823-.684h-1.362z"
    />
    <Path
      fill={props.color}
      d="M12.762 10.879h-2.176a.75.75 0 0 1-.75-.75V7.106a.75.75 0 0 1 .75-.75h2.112a2.314 2.314 0 0 1 2.317 2.043 2.26 2.26 0 0 1-2.253 2.48m-1.426-1.5h1.426a.764.764 0 0 0 .759-.84.8.8 0 0 0-.823-.683h-1.362zM12.156 14.793a.75.75 0 0 1-.75-.75v-.89a.75.75 0 0 1 1.5 0v.89a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M12.156 7.849a.75.75 0 0 1-.75-.75v-.892a.75.75 0 0 1 1.5 0v.892a.75.75 0 0 1-.75.75M18.624 18.05H5.906a.75.75 0 1 1 0-1.5h12.718a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystBitcoinMobilePhoneOutline;
