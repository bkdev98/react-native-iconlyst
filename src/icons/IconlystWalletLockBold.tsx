import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletLockBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.63 11.267a.749.749 0 1 1-1.5 0c0-.42.33-.75.75-.75.41 0 .75.33.75.75m-2.63.06c0 .98.8 1.78 1.78 1.78h4.01a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4.01c-.98 0-1.78.8-1.78 1.79"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.5 11.327c0-1.82 1.47-3.29 3.28-3.29h4.008a.29.29 0 0 0 .292-.302 5.435 5.435 0 0 0-5.42-5.098H8.53c-3 0-5.44 2.44-5.44 5.44v2.628c0 .25.292.396.51.274a4.3 4.3 0 0 1 2.07-.542h.04c2.25 0 4.113 1.717 4.31 3.92.008.077.042.149.096.203a3.94 3.94 0 0 1 1.154 2.807v1.72q-.001.402-.074.78c-.038.196.106.39.306.39h5.158c3.02 0 5.276-2.449 5.422-5.35a.29.29 0 0 0-.292-.3h-4.01c-1.81 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.024 19.084c0 .43-.347.78-.773.78H4.183a.776.776 0 0 1-.773-.78v-1.72c0-.425.346-.77.773-.77h3.068c.426 0 .773.345.773.77zm-2.323-5.4h.01c.593 0 1.08.477 1.087 1.06v.35H4.635v-.346a1.074 1.074 0 0 1 1.066-1.064m2.597 1.677v-.627a2.59 2.59 0 0 0-2.587-2.55h-.025a2.57 2.57 0 0 0-2.55 2.55v.627a2.27 2.27 0 0 0-1.226 2.003v1.72a2.28 2.28 0 0 0 2.273 2.28h3.068a2.28 2.28 0 0 0 2.273-2.28v-1.72c0-.872-.5-1.623-1.226-2.003"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletLockBold;
