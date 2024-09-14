import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileTableBulk = ({
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
      d="M16.62 5.364h-2.652a1.66 1.66 0 0 1-1.313-.657l-.856-1.14a2.66 2.66 0 0 0-2.111-1.054H7.813c-3.424 0-5.088 1.907-5.088 5.829v7.312c0 3.652 2.185 5.833 5.845 5.833h7.296c3.652 0 5.833-2.181 5.833-5.83l.026-4.658c0-3.845-1.622-5.635-5.105-5.635"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.834 17.307c1.516 0 2.575-1.097 2.575-2.667v-2.576c0-1.571-1.06-2.668-2.575-2.668h-3.217c-1.517 0-2.575 1.097-2.575 2.668v2.576c0 1.57 1.058 2.667 2.575 2.667zm-2.359-6.411v1.706H9.541v-.538c0-.352.105-1.168 1.076-1.168zm-1.934 3.206h1.934v1.705h-.858c-.971 0-1.076-.816-1.076-1.167zm3.434 0v1.705h.858c.971 0 1.076-.816 1.076-1.167v-.538zm1.934-1.5h-1.934v-1.706h.858c.971 0 1.076.816 1.076 1.168z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileTableBulk;
