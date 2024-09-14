import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteTerminalTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.283 3h8.435C19.666 3 21.5 5.08 21.5 8.026v7.947c0 2.945-1.834 5.027-4.783 5.027H8.283C5.335 21 3.5 18.918 3.5 15.973V8.026C3.5 5.08 5.344 3 8.283 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.242 17.207h2.736M9.023 12.805l1.965 1.964-1.965 1.964"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 9.492h-18M6.8 6.55h-.01m4.981 0h-.01m-2.476 0h-.01"
    />
  </Svg>
);
export default IconlystWebsiteTerminalTwoTone;
