import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteTerminalLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.783 3h8.435C19.166 3 21 5.08 21 8.026v7.947C21 18.918 19.166 21 16.217 21H7.783C4.835 21 3 18.918 3 15.973V8.026C3 5.08 4.844 3 7.783 3M12.742 17.207h2.736"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.523 12.805 1.965 1.964-1.965 1.964M21 9.492H3M6.3 6.55h-.01m4.981 0h-.01m-2.476 0h-.01"
    />
  </Svg>
);
export default IconlystWebsiteTerminalLight;
