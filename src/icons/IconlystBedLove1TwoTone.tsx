import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedLove1TwoTone = ({
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
      d="M18.998 18.378V19.9M5.424 18.378V19.9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.998 5.066v7.312M5.424 5.066v7.312"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.715 6.569c-.606.082-2.311.41-4.291 1.065M14.707 6.569c.605.082 2.311.41 4.291 1.065"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.726 6.482c.297-.927-.048-1.99-1.02-2.303-.25-.08-.517-.1-.777-.056s-.506.224-.717.382c-.212-.157-.458-.336-.717-.38a1.7 1.7 0 0 0-.778.054c-.971.315-1.32 1.376-1.022 2.303.458 1.47 2.517 2.432 2.517 2.432s2.027-.945 2.514-2.432"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.209 16.291c0-.849 0-1.273.085-1.623a3 3 0 0 1 2.204-2.205c.35-.085.775-.085 1.624-.085h10.174c.849 0 1.273 0 1.623.085a3 3 0 0 1 2.204 2.205c.086.35.086.774.086 1.623 0 .453 0 .68-.046.866a1.6 1.6 0 0 1-1.175 1.175c-.187.046-.414.046-.866.046H5.296c-.453 0-.679 0-.866-.046a1.6 1.6 0 0 1-1.176-1.175c-.045-.187-.045-.413-.045-.866"
    />
  </Svg>
);
export default IconlystBedLove1TwoTone;