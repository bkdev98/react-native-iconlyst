import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStacksBroken = ({
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
      d="M9.184 10.912h6.634M9.184 13.147h6.634M12.019 13.148l-1.728 3.042M14.562 16.19l-1.728-3.042M12.052 10.914l-1.761-3.101M14.562 7.813 12.8 10.914M12.5 21a9 9 0 1 1 4.172-1.023"
    />
  </Svg>
);
export default IconlystStacksBroken;
