import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleLenzOutline = ({
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
      d="M2.25 7A4.75 4.75 0 0 1 7 2.25h2.5c.69 0 1.25.56 1.25 1.25V6c0 .69-.56 1.25-1.25 1.25h-2a.25.25 0 0 0-.25.25v2c0 .69-.56 1.25-1.25 1.25H3.5c-.69 0-1.25-.56-1.25-1.25zM7 3.75A3.25 3.25 0 0 0 3.75 7v2.25h2V7.5c0-.966.784-1.75 1.75-1.75h1.75v-2zM2.25 14.5c0-.69.56-1.25 1.25-1.25H6c.69 0 1.25.56 1.25 1.25v2c0 .138.112.25.25.25h2c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H7A4.75 4.75 0 0 1 2.25 17zm1.5.25V17A3.25 3.25 0 0 0 7 20.25h2.25v-2H7.5a1.75 1.75 0 0 1-1.75-1.75v-1.75zM13.25 3.5c0-.69.56-1.25 1.25-1.25H17A4.75 4.75 0 0 1 21.75 7v2.5c0 .69-.56 1.25-1.25 1.25H18c-.69 0-1.25-.56-1.25-1.25v-2a.25.25 0 0 0-.25-.25h-2c-.69 0-1.25-.56-1.25-1.25zm1.5.25v2h1.75c.966 0 1.75.784 1.75 1.75v1.75h2V7A3.25 3.25 0 0 0 17 3.75zM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M18.344 16.742a1.516 1.516 0 1 0 0 3.032 1.516 1.516 0 0 0 0-3.032m-3.016 1.516a3.016 3.016 0 1 1 6.032 0 3.016 3.016 0 0 1-6.032 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleLenzOutline;
