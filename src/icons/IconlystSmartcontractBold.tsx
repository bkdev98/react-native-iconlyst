import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartcontractBold = ({
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
      d="M15.75 12.755h-7.5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5m0 3.5h-7.5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5m-7.5-8.5h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5m12.75 11h-1.75v-6H20a.75.75 0 0 0 0-1.5h-.75v-6H21a.75.75 0 0 0 0-1.5h-2.098a2.49 2.49 0 0 0-2.152-1.25h-9.5a2.49 2.49 0 0 0-2.152 1.25H3a.75.75 0 0 0 0 1.5h1.75v6H4a.75.75 0 0 0 0 1.5h.75v6H3a.75.75 0 0 0 0 1.5h2.098a2.49 2.49 0 0 0 2.152 1.25h9.5a2.49 2.49 0 0 0 2.152-1.25H21a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmartcontractBold;
