import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarLockTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.695 21h-2.927c-.801 0-1.452-.65-1.452-1.453v-1.642c0-.802.65-1.453 1.452-1.453h2.927c.802 0 1.453.65 1.453 1.453v1.642c0 .802-.65 1.453-1.453 1.453"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.979 16.479v-1.082a1.748 1.748 0 0 0-3.493-.006v1.088M14.32 11.049h1.573M6.551 11.049h1.573M3.356 7.385c5.215.74 10.509.74 15.724 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.097 10.81c-.001-.708-.227-1.4-.646-1.971L17.43 7.47a1.6 1.6 0 0 1-.196-.374l-.918-2.55a1.96 1.96 0 0 0-1.513-1.266 23 23 0 0 0-7.148 0 1.96 1.96 0 0 0-1.504 1.267l-.918 2.55a1.5 1.5 0 0 1-.195.356L4.002 8.881a3.3 3.3 0 0 0-.63 1.946l-.014 4.554a.875.875 0 0 0 .875.878h1.734a.875.875 0 0 0 .874-.875v-.358c0-.483.392-.875.875-.875h4.308"
    />
  </Svg>
);
export default IconlystCarLockTwoTone;
