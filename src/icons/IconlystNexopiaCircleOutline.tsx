import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNexopiaCircleOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.75 8.45c0-.691.56-1.25 1.25-1.25h2.15c.69 0 1.25.559 1.25 1.25v7.1c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25zm1.5.25v6.6H9.9V8.7zM13.8 7.2a1.2 1.2 0 0 0-1.2 1.2v7.2a1.2 1.2 0 0 0 1.2 1.2h2.25a1.2 1.2 0 0 0 1.2-1.2v-4.95A3.45 3.45 0 0 0 13.8 7.2m.3 1.522V15.3h1.65v-4.65a1.95 1.95 0 0 0-1.65-1.927"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNexopiaCircleOutline;
