import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSparklingTwoTone = ({
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
      d="m8.89 6.296-1.846 3.93-3.93 1.847 3.93 1.846 1.846 3.93 1.846-3.93 3.93-1.846-3.93-1.846z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.26 3.554-.644 1.37-1.37.645 1.37.644.644 1.371.644-1.371 1.372-.644-1.372-.644zM18.125 14.467l-.955 2.034-2.034.956 2.034.955.955 2.034.956-2.034 2.034-.955-2.034-.956z"
    />
  </Svg>
);
export default IconlystSparklingTwoTone;
