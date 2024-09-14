import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerAdapterChargeOutputOutline = ({
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
      d="M10.207 13.072c-.912 0-1.651.74-1.651 1.652v3.874c0 .912.739 1.651 1.651 1.651h7.83c.911 0 1.65-.739 1.65-1.651v-3.874c0-.913-.739-1.652-1.65-1.652zm-3.151 1.652c0-1.74 1.41-3.152 3.151-3.152h7.83c1.74 0 3.15 1.411 3.15 3.152v3.874c0 1.74-1.41 3.151-3.15 3.151h-7.83a3.15 3.15 0 0 1-3.151-3.151z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.223 14.261a.75.75 0 0 1 .3 1.018l-.339.622h.875a.75.75 0 0 1 .659 1.108l-.942 1.733a.75.75 0 0 1-1.318-.716l.34-.625h-.876a.75.75 0 0 1-.659-1.109l.943-1.73a.75.75 0 0 1 1.017-.3M13.5 4.055a.75.75 0 0 1 .75-.75h4.227a.75.75 0 0 1 .75.75v1.493a1.984 1.984 0 0 1-1.984 1.984h-1.76A1.983 1.983 0 0 1 13.5 5.548zm1.5.75v.743c0 .268.217.484.483.484h1.76a.484.484 0 0 0 .484-.484v-.743z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.501 6.031a.75.75 0 0 1 .75.75 3.15 3.15 0 0 1-3.15 3.15H7.799a2.987 2.987 0 0 0-2.987 2.988 2.78 2.78 0 0 0 2.78 2.78h.207a.75.75 0 0 1 0 1.5h-.207a4.28 4.28 0 0 1-4.28-4.28A4.487 4.487 0 0 1 7.8 8.432H14.1a1.65 1.65 0 0 0 1.65-1.65.75.75 0 0 1 .75-.75M14.885 2.25a.75.75 0 0 1 .75.75v1.054a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m3 0a.75.75 0 0 1 .75.75v1.054a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerAdapterChargeOutputOutline;
