import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarMagicGlowBroken = ({
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
      d="m9.975 16.927-3.19-.045a.942.942 0 0 1-.71-1.54l2.012-2.503a.96.96 0 0 0 .175-.87L7.365 8.92a.963.963 0 0 1 1.252-1.167l2.976 1.107a.95.95 0 0 0 .88-.114l2.637-1.835a.94.94 0 0 1 1.486.817l-.174 3.184a.94.94 0 0 0 .37.799l2.525 1.91a.956.956 0 0 1-.337 1.676l-3.081.861a.97.97 0 0 0-.652.608l-1.073 3.018a.957.957 0 0 1-1.215.59.95.95 0 0 1-.48-.371l-.6-.92M11.588 3.916v1.361M4.635 12.23h-1.22m5.906 7.965-.316.965M19.686 9.872l.901-.295M18.297 19.53l2.227 2.386"
    />
  </Svg>
);
export default IconlystStarMagicGlowBroken;
