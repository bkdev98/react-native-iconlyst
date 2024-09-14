import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartcontractOutline = ({
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
      d="M4.75 5A2.75 2.75 0 0 1 7.5 2.25H17A2.75 2.75 0 0 1 19.75 5v14A2.75 2.75 0 0 1 17 21.75H7.5A2.75 2.75 0 0 1 4.75 19zM7.5 3.75c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25H17c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 4.5a.75.75 0 0 1 .75-.75H5.5a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m1 7.5a.75.75 0 0 1 .75-.75H5.5a.75.75 0 0 1 0 1.5H4.25A.75.75 0 0 1 3.5 12m-1 7.5a.75.75 0 0 1 .75-.75H5.5a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M18.25 4.5a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H19a.75.75 0 0 1-.75-.75m0 7.5a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5H19a.75.75 0 0 1-.75-.75m0 7.5a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H19a.75.75 0 0 1-.75-.75M7.75 8.5a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmartcontractOutline;
