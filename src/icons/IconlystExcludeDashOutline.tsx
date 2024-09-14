import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExcludeDashOutline = ({
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
      d="M3.62 8.621c.749-.805 1.81-1.25 3.05-1.25h3.464a.75.75 0 0 1 0 1.5H6.67c-.867 0-1.515.302-1.95.771-.442.475-.72 1.181-.72 2.079v5.688c0 .899.277 1.602.716 2.074.433.465 1.08.767 1.954.767h6.03c.873 0 1.523-.302 1.959-.768.44-.472.719-1.176.719-2.073v-3.564a.75.75 0 0 1 1.5 0v3.564c0 1.208-.379 2.3-1.123 3.097-.75.803-1.814 1.244-3.056 1.244H6.67c-1.241 0-2.303-.442-3.051-1.245-.742-.798-1.118-1.89-1.118-3.096V11.72c0-1.208.378-2.301 1.12-3.1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.283 12.47a.75.75 0 0 1 .833.657c.074.626.319 1.11.667 1.44.345.327.835.544 1.481.563a.75.75 0 0 1-.044 1.5c-.977-.03-1.83-.369-2.47-.975-.635-.603-1.015-1.427-1.124-2.352a.75.75 0 0 1 .657-.833M12.506 8.1a.75.75 0 0 1 .772-.729c.977.03 1.83.369 2.47.975.636.603 1.015 1.427 1.124 2.352a.75.75 0 1 1-1.49.176c-.074-.626-.319-1.11-.666-1.44-.346-.327-.836-.544-1.482-.563a.75.75 0 0 1-.728-.772"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.742 3.5c.748-.805 1.81-1.25 3.049-1.25h6.03c1.242 0 2.307.444 3.056 1.25C21.621 4.297 22 5.391 22 6.6v5.688c0 1.208-.379 2.3-1.124 3.097-.75.803-1.814 1.244-3.056 1.244h-4.085a.75.75 0 0 1 0-1.5h4.085c.874 0 1.525-.302 1.96-.768.441-.472.72-1.175.72-2.073V6.6c0-.898-.279-1.604-.72-2.078-.437-.47-1.088-.772-1.96-.772h-6.029c-.866 0-1.514.302-1.95.771-.441.475-.72 1.181-.72 2.079v3.645a.75.75 0 0 1-1.5 0V6.6c0-1.208.379-2.301 1.121-3.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExcludeDashOutline;
