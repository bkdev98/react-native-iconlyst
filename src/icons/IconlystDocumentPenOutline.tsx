import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPenOutline = ({
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
      d="M9.612 17.724a1.54 1.54 0 0 1-1.527-1.707l.079-.729a2.44 2.44 0 0 1 .607-1.364l3.083-3.365a1.72 1.72 0 0 1 2.43-.1l.65.6a1.72 1.72 0 0 1 .1 2.427l-3.042 3.32c-.37.41-.867.682-1.411.773l-.7.118a1.6 1.6 0 0 1-.27.027m3.506-6.219h-.01a.2.2 0 0 0-.15.07L9.884 14.93a.93.93 0 0 0-.227.52l-.08.73.753-.076a.95.95 0 0 0 .545-.3l3.05-3.327a.22.22 0 0 0-.01-.31l-.65-.6a.22.22 0 0 0-.146-.066z"
    />
    <Path
      fill={props.color}
      d="M16.25 21.75H8.294a4.5 4.5 0 0 1-4.42-4.6V6.657A4.523 4.523 0 0 1 8.368 2.25h5.668a2.81 2.81 0 0 1 2.02.861l3.79 3.949c.502.52.782 1.216.78 1.939v8.164a4.544 4.544 0 0 1-4.376 4.587m-7.879-18a3.01 3.01 0 0 0-3 2.925v10.488a3 3 0 0 0 2.937 3.086h7.91a3.044 3.044 0 0 0 2.905-3.082V9c0-.336-.13-.658-.362-.9l-3.79-3.95a1.3 1.3 0 0 0-.938-.4H8.368z"
    />
    <Path
      fill={props.color}
      d="M19.812 9.267h-2.739a3.314 3.314 0 0 1-3.3-3.311V3.062a.75.75 0 0 1 1.5 0v2.894a1.81 1.81 0 0 0 1.8 1.81h2.737a.75.75 0 0 1 0 1.5z"
    />
  </Svg>
);
export default IconlystDocumentPenOutline;
