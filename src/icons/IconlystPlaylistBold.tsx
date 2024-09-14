import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaylistBold = ({
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
      d="M20.875 8.172a.75.75 0 0 0-.75.75v6.155a.75.75 0 0 0 1.5 0V8.922a.75.75 0 0 0-.75-.75M17.956 5.793a.75.75 0 0 0-.75.75v10.915a.75.75 0 0 0 1.5 0V6.543a.75.75 0 0 0-.75-.75M8.359 12.752a.98.98 0 1 0 0 1.96.98.98 0 0 0 0-1.96"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.483 10.102a.75.75 0 0 1-.884.586 2.8 2.8 0 0 1-.76-.27v3.313l-.002.009a2.48 2.48 0 0 1-2.479 2.472 2.48 2.48 0 0 1-2.479-2.48 2.48 2.48 0 0 1 2.48-2.48c.348 0 .68.074.98.204V8.537a.75.75 0 0 1 1.451-.268c.01.025.33.791 1.107.949a.75.75 0 0 1 .586.884m-.547-6.622H5.982a3.61 3.61 0 0 0-3.607 3.608v9.824a3.61 3.61 0 0 0 3.607 3.608h5.954a3.613 3.613 0 0 0 3.608-3.608V7.088a3.613 3.613 0 0 0-3.608-3.608"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaylistBold;
