import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeHeartTwoTone = ({
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
      d="M4.997 8.775v8.675a3.064 3.064 0 0 0 3.064 3.064h8.88a3.064 3.064 0 0 0 3.063-3.064V8.775"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 9.956 13.974 4a2.38 2.38 0 0 0-2.948 0L3.5 9.956"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.424 16.532a11.3 11.3 0 0 1-1.948-1.517 3.9 3.9 0 0 1-.926-1.476c-.347-1.083.058-2.321 1.196-2.688a1.93 1.93 0 0 1 1.755.296 1.94 1.94 0 0 1 1.753-.296c1.138.367 1.547 1.605 1.2 2.688a3.9 3.9 0 0 1-.927 1.478 11.3 11.3 0 0 1-1.948 1.515l-.076.048z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHomeHeartTwoTone;
