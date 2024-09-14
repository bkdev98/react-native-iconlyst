import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPagekitOutline = ({
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
      d="M2.75 5.5A2.75 2.75 0 0 1 5.5 2.75h13a2.75 2.75 0 0 1 2.75 2.75v9.222a2.75 2.75 0 0 1-2.75 2.75h-6.694V18.5a2.75 2.75 0 0 1-2.75 2.75H5.5a2.75 2.75 0 0 1-2.75-2.75zm9.056 10.472v-2.028a.25.25 0 0 1 .25-.25h2.666a2.75 2.75 0 0 0 2.75-2.75V9.278a2.75 2.75 0 0 0-2.75-2.75H9.278a2.75 2.75 0 0 0-2.75 2.75v6.444c0 .967.783 1.75 1.75 1.75h2.028V18.5c0 .69-.56 1.25-1.25 1.25H5.5c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h13c.69 0 1.25.56 1.25 1.25v9.222c0 .69-.56 1.25-1.25 1.25zm-1.5 0H8.278a.25.25 0 0 1-.25-.25V9.278c0-.69.56-1.25 1.25-1.25h5.444c.69 0 1.25.56 1.25 1.25v1.666c0 .69-.56 1.25-1.25 1.25h-2.666a1.75 1.75 0 0 0-1.75 1.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPagekitOutline;
