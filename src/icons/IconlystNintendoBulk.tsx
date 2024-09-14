import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNintendoBulk = ({
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
      d="M6.66 9.12c-.57 0-1.04-.46-1.04-1.04 0-.56.47-1.03 1.04-1.03a1.035 1.035 0 0 1 0 2.07m3.82-6.62h-2.7C4.62 2.5 2.5 4.73 2.5 8.03v7.95c0 3.31 2.12 5.52 5.28 5.52h2.7c.28 0 .5-.22.5-.5V3c0-.27-.22-.5-.5-.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.22 2.5h-2.7c-.28 0-.5.23-.5.5v18c0 .28.22.5.5.5h2.7c3.16 0 5.28-2.22 5.28-5.53V8.02c0-3.3-2.12-5.52-5.28-5.52"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.31 15.95c0 .57.46 1.03 1.03 1.03s1.04-.46 1.04-1.03-.47-1.04-1.04-1.04-1.03.47-1.03 1.04"
    />
  </Svg>
);
export default IconlystNintendoBulk;
