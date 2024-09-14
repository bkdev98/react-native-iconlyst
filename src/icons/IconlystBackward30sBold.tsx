import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward30sBold = ({
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
      d="M10.19 14.111a.694.694 0 0 1-.696-.689.75.75 0 1 0-1.5 0c0 1.207.985 2.189 2.196 2.189a2.194 2.194 0 0 0 1.651-3.638c.34-.385.544-.89.544-1.442a2.2 2.2 0 0 0-2.195-2.199 2.2 2.2 0 0 0-2.196 2.199.75.75 0 0 0 1.5 0c0-.386.312-.699.696-.699s.695.313.695.699c0 .381-.31.69-.695.69a.75.75 0 0 0 0 1.5c.384 0 .695.315.695.701a.693.693 0 0 1-.695.689M14.426 13.13v-2.319a.94.94 0 0 1 .936-.94c.515 0 .934.421.934.94v2.32c0 .518-.42.94-.934.94a.94.94 0 0 1-.936-.94m3.37 0v-2.319a2.44 2.44 0 0 0-2.434-2.44 2.44 2.44 0 0 0-2.436 2.44v2.32a2.44 2.44 0 0 0 2.436 2.44 2.44 2.44 0 0 0 2.434-2.44"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.568 3c-3.934 0-7.33 2.594-8.534 6.159l-.633-.194a.752.752 0 0 0-.935.942l.793 2.509a.752.752 0 0 0 1.181.362l2.06-1.632a.75.75 0 0 0-.246-1.305L5.47 9.6c1.012-2.954 3.832-5.1 7.1-5.1 4.135 0 7.5 3.364 7.5 7.5s-3.365 7.5-7.5 7.5a7.5 7.5 0 0 1-6.176-3.245.749.749 0 1 0-1.234.851A9 9 0 0 0 12.57 21c4.962 0 9-4.037 9-9s-4.038-9-9-9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward30sBold;
