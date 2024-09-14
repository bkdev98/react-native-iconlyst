import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLoading1Broken = ({
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
      d="M5.044 6.397a8.4 8.4 0 0 1 1.358-1.451M9.964 19.63a8.4 8.4 0 0 0 2.473.181A8.37 8.37 0 0 0 17 18.045l.528-.462L20.95 21M6.983 18.303a8.44 8.44 0 0 1-2.918-3.537M3.687 9.123a8.4 8.4 0 0 0-.28 2.837M19.58 14.608a8.3 8.3 0 0 0 .628-3.506 8.4 8.4 0 0 0-.669-2.986M17.788 5.51a8.4 8.4 0 0 0-6.324-2.504"
    />
  </Svg>
);
export default IconlystSearchLoading1Broken;
