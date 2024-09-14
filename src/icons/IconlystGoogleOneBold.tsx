import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleOneBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.146 13.834a.4.4 0 0 0-.117.283v5.022c0 1.588 1.29 2.88 2.876 2.88a2.88 2.88 0 0 0 2.875-2.88V8.683a.2.2 0 0 0-.342-.141zM11.98 12.103a.2.2 0 0 0 .341.141l5.342-5.341a.4.4 0 0 0 .117-.283v-.7c0-.05-.012-.094-.015-.142a2.85 2.85 0 0 0-.776-1.885 2.885 2.885 0 0 0-4.065-.11l-.001.002-.819.777a.4.4 0 0 0-.124.29zM10.98 6.097a.2.2 0 0 0-.338-.145L7.113 9.305c-1.147 1.085-1.196 2.908-.107 4.068a2.86 2.86 0 0 0 2.015.893h.069c.642 0 1.25-.217 1.751-.608a.37.37 0 0 0 .139-.296z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleOneBold;
