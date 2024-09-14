import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImage2Outlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.837 11.69a2.51 2.51 0 0 1-2.511-2.51 2.513 2.513 0 0 1 2.51-2.51 2.513 2.513 0 0 1 2.512 2.51 2.51 2.51 0 0 1-2.511 2.51m0-3.52a1.011 1.011 0 1 0 0 2.022 1.011 1.011 0 0 0 0-2.023"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.867 15q.134-1.189.133-2.604c0-7.383-2.617-10-10-10s-10 2.617-10 10 2.617 10 10 10c6.315 0 9.143-1.915 9.83-7.089a.8.8 0 0 0 .037-.308M12 3.896c-6.514 0-8.5 1.986-8.5 8.5 0 2.339.256 4.094.886 5.383.556-.97 1.45-2.245 2.522-2.748 1.12-.525 2.02-.202 2.892.111h.002c.645.233 1.31.472 2.227.472.708 0 1.114-.632 1.717-1.663.619-1.059 1.389-2.375 2.958-2.375 1.712 0 2.91.855 3.783 1.708q.013-.429.013-.888c0-6.514-1.986-8.5-8.5-8.5m8.32 11.409-.163-.182-.012-.013c-.814-.907-1.825-2.034-3.441-2.034-.675 0-1.071.62-1.663 1.632-.627 1.072-1.407 2.406-3.012 2.406-1.179 0-2.04-.31-2.735-.56l-.003-.001c-.824-.298-1.211-.417-1.744-.165-.797.375-1.683 1.74-2.19 2.75C6.67 20.412 8.784 20.896 12 20.896c5.42 0 7.706-1.375 8.32-5.591"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImage2Outlinecurved;
