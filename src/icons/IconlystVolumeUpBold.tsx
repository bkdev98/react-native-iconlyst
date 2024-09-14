import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeUpBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M10.758 3c1.043 0 2.016.752 2.367 1.956.13.504.182 1.008.232 1.495l.047.442c.18 1.476.18 8.728 0 10.215l-.047.459c-.045.462-.091.941-.224 1.452C12.78 20.221 11.845 21 10.782 21l-.105-.001c-.587 0-1.226-.36-1.588-.675l-3.526-2.941H3.752c-1.398 0-2.421-1.012-2.607-2.579-.214-1.566-.172-4.253 0-5.677.203-1.483 1.274-2.51 2.607-2.51h1.81l3.46-2.898c.418-.363 1.154-.721 1.736-.719m8.532.221a.905.905 0 0 1 1.277.236C22.136 5.767 23 8.802 23 12c0 3.2-.864 6.234-2.433 8.544a.902.902 0 0 1-1.276.236.957.957 0 0 1-.23-1.308c1.356-1.999 2.104-4.653 2.104-7.472 0-2.818-.748-5.472-2.105-7.471a.96.96 0 0 1 .23-1.308m-3.162 3.037a.907.907 0 0 1 1.279.237C18.42 7.987 18.978 9.942 18.978 12s-.558 4.013-1.571 5.505a.905.905 0 0 1-1.277.236.956.956 0 0 1-.23-1.307c.802-1.182 1.243-2.757 1.243-4.434s-.441-3.252-1.243-4.434a.957.957 0 0 1 .228-1.308"
    />
  </Svg>
);
export default IconlystVolumeUpBold;
