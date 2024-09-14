import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColorPaletteBulk = ({
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
      d="M18.977 7.885c-.91-2.48-3.81-2.92-5.42-1.31L11.045 9.07a.4.4 0 0 0-.118.282l-.02 3.914-.01 1.24v.01l-.017 3.444a.2.2 0 0 0 .341.143l7.016-7.007c.84-.84 1.15-2.09.74-3.21M19.173 14.753h-2.281a.4.4 0 0 0-.28.115l-6.14 6.042a.2.2 0 0 0 .14.343h8.672c1.186 0 2.296-.664 2.794-1.74 1.11-2.403-.627-4.76-2.905-4.76"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M6.199 3.748c-1.79 0-3.25 1.46-3.25 3.25v1.68c0 .11.09.2.2.2.874-.002 4.391-.01 6.1-.01a.2.2 0 0 0 .2-.2v-1.67a3.25 3.25 0 0 0-3.25-3.25M3.149 10.359a.2.2 0 0 0-.2.2v3.118c0 .045.045.081.09.081h6.21a.2.2 0 0 0 .2-.2v-2.99a.2.2 0 0 0-.2-.2c-1.709 0-5.226-.008-6.1-.01M3.149 15.249a.2.2 0 0 0-.2.2v2.55c0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.45 3.25-3.25v-2.54a.2.2 0 0 0-.2-.2z" />
    </G>
    <Path
      fill={props.color}
      d="M7.1 18.048c0-.49-.4-.9-.9-.9-.49 0-.9.41-.9.9 0 .5.41.9.9.9.5 0 .9-.4.9-.9"
    />
  </Svg>
);
export default IconlystColorPaletteBulk;
