import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTradeBitcoinOutline = ({
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
      d="M13.027 16.044h-2.37a.75.75 0 0 1-.75-.75V12a.75.75 0 0 1 .75-.75h2.3a2.454 2.454 0 0 1 2.456 2.164 2.4 2.4 0 0 1-2.385 2.63m-1.623-1.5h1.623a.89.89 0 0 0 .852-.619.9.9 0 0 0 .04-.374.943.943 0 0 0-.964-.806h-1.55z"
    />
    <Path
      fill={props.color}
      d="M13.027 12.751h-2.37a.75.75 0 0 1-.75-.75V8.707a.75.75 0 0 1 .75-.75h2.3a2.455 2.455 0 0 1 2.456 2.164 2.4 2.4 0 0 1-2.385 2.63m-1.623-1.5h1.623a.89.89 0 0 0 .851-.616.9.9 0 0 0 .04-.372.943.943 0 0 0-.963-.806h-1.55zM12.371 17.019a.75.75 0 0 1-.75-.75v-.972a.75.75 0 1 1 1.5 0v.972a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M12.371 9.454a.75.75 0 0 1-.75-.75v-.97a.75.75 0 1 1 1.5 0v.97a.75.75 0 0 1-.75.75M5.941 19.128q-.075 0-.148-.014l-2.68-.533a.75.75 0 1 1 .291-1.472l1.947.388.385-1.933a.75.75 0 1 1 1.47.293l-.53 2.668a.75.75 0 0 1-.735.603M18.044 9.042a.73.73 0 0 1-.418-.126.75.75 0 0 1-.318-.77l.53-2.668a.747.747 0 0 1 .882-.59l2.682.534a.75.75 0 0 1-.292 1.47l-1.947-.386-.385 1.929a.75.75 0 0 1-.734.607"
    />
    <Path
      fill={props.color}
      d="M12.286 21.546q-.846 0-1.679-.149a.75.75 0 0 1-.607-.87.76.76 0 0 1 .87-.607 8.011 8.011 0 0 0 7.186-13.449.75.75 0 1 1 1.078-1.042 9.51 9.51 0 0 1-6.848 16.117M5.922 18.8a.74.74 0 0 1-.539-.228 9.512 9.512 0 0 1 8.523-15.97.75.75 0 1 1-.263 1.478 8.011 8.011 0 0 0-7.182 13.45.749.749 0 0 1-.539 1.27"
    />
  </Svg>
);
export default IconlystTradeBitcoinOutline;
