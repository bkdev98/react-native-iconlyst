import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWindyOutline = ({
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
      d="M15.326 4.123a5.444 5.444 0 0 1 3.738 9.402.75.75 0 1 0 1.03 1.09A6.944 6.944 0 1 0 8.916 6.89a4.868 4.868 0 0 0-5.92 4.754.75.75 0 0 0 1.5 0 3.368 3.368 0 0 1 4.61-3.132.75.75 0 0 0 .996-.485 5.45 5.45 0 0 1 5.224-3.904"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.514 12.135c-1.052 0-1.99.574-2.53 1.466a.75.75 0 0 1-1.283-.776c.788-1.305 2.194-2.19 3.813-2.19 1.806 0 3.342 1.098 4.06 2.657q.222-.033.454-.033c1.82 0 3.24 1.532 3.24 3.352s-1.42 3.352-3.24 3.352h-3.569a.75.75 0 0 1 0-1.5h3.569c.931 0 1.74-.798 1.74-1.852s-.809-1.852-1.74-1.852c-.224 0-.436.045-.632.126a.75.75 0 0 1-1.009-.49c-.374-1.326-1.535-2.26-2.873-2.26M2.84 15.435c0 .414.336.75.75.75h4.035c1.19 0 2.013-.924 2.013-2.013a2.012 2.012 0 0 0-3.681-1.126.75.75 0 0 0 1.242.84.511.511 0 0 1 .939.286c0 .305-.196.513-.513.513H3.59a.75.75 0 0 0-.75.75M10.624 19.877a.6.6 0 0 1-.442-.19.75.75 0 0 0-1.086 1.034 2.11 2.11 0 0 0 3.638-1.455c0-.542-.182-1.071-.563-1.473-.387-.406-.926-.627-1.535-.637H5.334a.75.75 0 0 0 0 1.5h5.283c.25.005.389.089.466.17.083.088.15.231.15.44a.61.61 0 0 1-.61.61"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudWindyOutline;
