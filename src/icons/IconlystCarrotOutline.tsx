import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarrotOutline = ({
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
      d="M12.85 5.496c1.42.036 2.775.665 3.84 1.73 1.065 1.066 1.694 2.42 1.731 3.842.037 1.43-.528 2.863-1.73 4.066-1.148 1.147-4.005 3.114-6.76 4.572-1.383.733-2.788 1.362-3.978 1.697-.594.167-1.173.273-1.69.263-.507-.009-1.063-.133-1.471-.541s-.532-.964-.541-1.472c-.01-.517.095-1.095.262-1.689.336-1.19.965-2.595 1.698-3.979 1.458-2.754 3.425-5.611 4.572-6.758 1.203-1.204 2.636-1.768 4.066-1.731m-.04 1.5c-.985-.026-2.03.355-2.967 1.291-.992.993-2.877 3.699-4.307 6.4-.711 1.345-1.285 2.641-1.579 3.684-.147.523-.212.944-.207 1.255.006.319.083.419.103.438s.119.097.438.102c.311.006.732-.06 1.255-.207 1.042-.293 2.34-.867 3.684-1.578 2.7-1.43 5.407-3.315 6.4-4.308.936-.936 1.317-1.98 1.292-2.967-.026-.994-.467-1.993-1.293-2.819s-1.824-1.266-2.818-1.292"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.051 8.761a.75.75 0 0 1 1.06 0l2.8 2.8a.75.75 0 0 1-1.06 1.06l-2.8-2.8a.75.75 0 0 1 0-1.06M8.051 15.168a.75.75 0 0 1 1.06 0l2.444 2.443a.75.75 0 0 1-1.06 1.06L8.05 16.23a.75.75 0 0 1 0-1.06M15.46 7.745a.75.75 0 0 0 .718.749l4.713.205a.75.75 0 1 0 .065-1.499l-3.996-.173V3.083a.75.75 0 0 0-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.666 8.273a.75.75 0 0 0 1.06.016l3.812-3.696a.75.75 0 0 0-1.044-1.077l-3.811 3.696a.75.75 0 0 0-.017 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarrotOutline;
