import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChilizOutline = ({
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
      d="M10.815 20.34c0-.804.669-1.408 1.434-1.408s1.433.604 1.433 1.408c0 .805-.669 1.41-1.434 1.41s-1.433-.605-1.433-1.41m1.47.075a.1.1 0 0 0 .03-.075.1.1 0 0 0-.03-.074.06.06 0 0 0-.037-.017.06.06 0 0 0-.036.017.1.1 0 0 0-.03.074c0 .035.016.062.03.075a.06.06 0 0 0 .037.017.06.06 0 0 0 .036-.017M2.799 3.659c0-.805.67-1.409 1.434-1.409s1.434.604 1.434 1.409c0 .804-.67 1.408-1.434 1.408-.765 0-1.434-.604-1.434-1.408m1.47.074a.1.1 0 0 0 .03-.074.1.1 0 0 0-.03-.075.06.06 0 0 0-.036-.017.06.06 0 0 0-.037.017.1.1 0 0 0-.03.075c0 .034.017.061.03.074a.06.06 0 0 0 .037.017q.015.001.036-.017M18.834 3.659c0-.805.67-1.409 1.434-1.409.765 0 1.434.604 1.434 1.409 0 .804-.67 1.408-1.434 1.408-.765 0-1.434-.604-1.434-1.408m1.47.074a.1.1 0 0 0 .03-.074.1.1 0 0 0-.03-.075.06.06 0 0 0-.036-.017.06.06 0 0 0-.037.017.1.1 0 0 0-.029.075c0 .034.016.061.03.074a.06.06 0 0 0 .036.017q.016.001.037-.017M6.754 12.008c0-.804.67-1.408 1.434-1.408.765 0 1.434.604 1.434 1.408 0 .805-.67 1.409-1.434 1.409-.765 0-1.434-.604-1.434-1.409m1.47.075a.1.1 0 0 0 .03-.075.1.1 0 0 0-.03-.074.06.06 0 0 0-.036-.017.06.06 0 0 0-.037.017.1.1 0 0 0-.03.074c0 .035.017.062.03.075a.06.06 0 0 0 .037.017q.015 0 .036-.017M14.879 12.008c0-.804.67-1.408 1.434-1.408.765 0 1.434.604 1.434 1.408 0 .805-.67 1.409-1.434 1.409-.765 0-1.434-.604-1.434-1.409m1.47.075a.1.1 0 0 0 .03-.075.1.1 0 0 0-.03-.074.06.06 0 0 0-.036-.017.06.06 0 0 0-.037.017.1.1 0 0 0-.03.074c0 .035.017.062.03.075a.06.06 0 0 0 .037.017q.015 0 .037-.017"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.595 3.255a.75.75 0 0 1 .634-.349h16.038a.75.75 0 0 1 .679 1.07l-8.02 17.005a.75.75 0 0 1-1.356 0L3.55 3.976a.75.75 0 0 1 .045-.721m1.816 1.151 6.837 14.497 6.836-14.497z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.617 3.23a.75.75 0 0 1 1.044-.187l12.078 8.4a.75.75 0 0 1-.856 1.232L3.804 4.274a.75.75 0 0 1-.187-1.044"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.884 3.23a.75.75 0 0 1-.187 1.044l-12.08 8.4a.75.75 0 0 1-.856-1.23l12.08-8.401a.75.75 0 0 1 1.043.187"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChilizOutline;
