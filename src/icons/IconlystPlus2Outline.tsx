import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlus2Outline = ({
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
      d="M12 7.704a.75.75 0 0 1 .75.75v2.548h2.55a.75.75 0 1 1 0 1.5h-2.55v2.545a.75.75 0 0 1-1.5 0v-2.545H8.7a.75.75 0 1 1 0-1.5h2.55V8.454a.75.75 0 0 1 .75-.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2a9.75 9.75 0 0 1 9.75 9.75c0 5.384-4.365 9.75-9.75 9.75s-9.75-4.366-9.75-9.75A9.75 9.75 0 0 1 12 2m8.25 9.75A8.25 8.25 0 0 0 12 3.5a8.25 8.25 0 1 0 8.25 8.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlus2Outline;
