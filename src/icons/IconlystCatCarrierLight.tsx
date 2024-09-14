import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatCarrierLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.968 13.838H3.016M8.928 7.179V5.642c0-.849.688-1.537 1.537-1.537h3.073c.849 0 1.537.688 1.537 1.537v1.537M12.002 7.179v6.659M15.685 7.179l1.018 6.659M8.318 7.179l-1.019 6.659M17.58 7.179c.9 0 1.694.587 1.958 1.446l1.326 4.309a3.07 3.07 0 0 1 0 1.807l-1.326 4.309a2.05 2.05 0 0 1-1.958 1.446H6.42c-.9 0-1.694-.587-1.958-1.446L3.136 14.74a3.07 3.07 0 0 1 0-1.807l1.326-4.309A2.05 2.05 0 0 1 6.42 7.18z"
    />
  </Svg>
);
export default IconlystCatCarrierLight;
