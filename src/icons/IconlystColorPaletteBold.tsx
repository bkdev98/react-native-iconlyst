import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColorPaletteBold = ({
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
      d="M2.45 6.507a3.25 3.25 0 1 1 6.5 0v11c0 1.8-1.45 3.25-3.25 3.25a3.25 3.25 0 0 1-3.25-3.25v-5.935c.03.01.06 0 .09 0h-.011l-.01-.001-.01-.001c-.02-.002-.04-.005-.06.002zm4.15 11.05c0-.49-.4-.9-.9-.9-.49 0-.9.41-.9.9 0 .5.41.9.9.9.5 0 .9-.4.9-.9"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M18.478 7.395c-.91-2.48-3.81-2.92-5.42-1.31l-2.513 2.493a.4.4 0 0 0-.118.282l-.047 8.609a.2.2 0 0 0 .341.142l7.017-7.006c.84-.84 1.15-2.09.74-3.21M16.111 14.376a.4.4 0 0 1 .28-.114h2.282c2.278 0 4.015 2.357 2.905 4.76-.498 1.076-1.608 1.74-2.794 1.74h-8.672a.2.2 0 0 1-.14-.343z"
    />
  </Svg>
);
export default IconlystColorPaletteBold;
