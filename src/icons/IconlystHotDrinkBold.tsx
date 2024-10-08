import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotDrinkBold = ({
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
      d="M11.197 3.401a.74.74 0 0 0-.228-1.03.73.73 0 0 0-.418-.12.75.75 0 0 0-.618.35 3.05 3.05 0 0 0-.474 1.656q0 .075.002.14l.006.094c.003.06.009.11.014.14l.003.025.004.025.002.02.003.01c.074.4.465.67.871.6a.753.753 0 0 0 .603-.87l-.004-.06a1.8 1.8 0 0 1 .027-.447c.033-.17.095-.354.207-.533M14.636 3.401a.743.743 0 0 0-.227-1.03.744.744 0 0 0-1.036.23 3.06 3.06 0 0 0-.466 1.41c-.014.19-.01.36-.002.48l.008.085a1 1 0 0 0 .014.105l.001.008.001.012s.003 0 .003.01c.075.4.465.67.872.6a.755.755 0 0 0 .603-.87l-.001-.01-.004-.05a1.6 1.6 0 0 1 .002-.25q.003-.053.012-.11l.008-.056q.011-.063.028-.13c.036-.141.094-.29.184-.434M7.528 2.371a.745.745 0 0 1 .228 1.03c-.157.25-.216.51-.233.73-.008.1-.005.19-.001.25l.004.049v.011c.076.4-.194.79-.601.87a.76.76 0 0 1-.804-.397.7.7 0 0 1-.07-.203l-.001-.01-.003-.02-.006-.05a3.213 3.213 0 0 1 .12-1.312c.07-.23.176-.476.33-.718a.744.744 0 0 1 1.037-.23"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.26 10.206A3.186 3.186 0 0 1 6.445 7.02h7.88c1.408 0 2.603.912 3.024 2.178h1.167a2.474 2.474 0 0 1 2.474 2.475v1.714a2.474 2.474 0 0 1-2.474 2.474h-1.012a5.954 5.954 0 0 1-5.946 5.64H9.213a5.953 5.953 0 0 1-5.953-5.954zm14.252 4.155h1.004a.974.974 0 0 0 .974-.974v-1.714a.974.974 0 0 0-.974-.975h-1.004zm-9.65-3.083a.75.75 0 0 0-1.5 0v2.918a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHotDrinkBold;
