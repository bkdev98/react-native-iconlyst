import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowGlobeBold = ({
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
      d="M16.84 19.145a.41.41 0 0 0-.345-.19h-8.99c-.14 0-.27.072-.345.19-.56.88-.85 1.32-.82 1.81.03.45.25.85.62 1.12.39.29.92.29 1.96.29h6.16c1.05 0 1.57 0 1.97-.29.36-.27.58-.67.61-1.12.03-.49-.25-.93-.82-1.81M6.98 17.859a.5.5 0 0 0 .292.096h.858c.16 0 .256-.177.181-.317a4.3 4.3 0 0 1-.511-2.023c0-.47.08-.92.23-1.35l-1.48-1.16a.76.76 0 0 1-.13-1.06c.26-.32.73-.38 1.06-.12l1.28 1.01c.14-.17.29-.32.46-.47-.44-.58-.71-1.3-.71-2.08 0-1.93 1.56-3.49 3.49-3.49 1.92 0 3.49 1.56 3.49 3.49a3.5 3.5 0 0 1-3.49 3.49c-.03 0-.06-.01-.09-.01v1.08a.749.749 0 1 1-1.5 0v-1.47s-.01-.01-.02-.01c-.67.51-1.09 1.29-1.09 2.15 0 .898.428 1.742 1.117 2.254a.45.45 0 0 0 .272.086h2.63a.45.45 0 0 0 .274-.087 2.85 2.85 0 0 0 1.117-2.253c0-.44-.11-.87-.3-1.24a.75.75 0 0 1 .2-.93l1.91-1.52c.33-.26.8-.2 1.06.12.25.33.2.8-.12 1.06l-1.47 1.16c.14.43.22.89.22 1.35a4.3 4.3 0 0 1-.512 2.023c-.075.14.022.317.18.317h.85a.5.5 0 0 0 .292-.096 8.33 8.33 0 0 0 3.32-6.664c0-4.59-3.74-8.33-8.34-8.33s-8.34 3.74-8.34 8.33a8.33 8.33 0 0 0 3.32 6.664"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 12.375c1.1 0 1.99-.89 1.99-1.99s-.89-1.99-1.99-1.99-1.99.89-1.99 1.99.89 1.99 1.99 1.99"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowGlobeBold;
