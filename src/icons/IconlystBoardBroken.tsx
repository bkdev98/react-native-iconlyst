import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoardBroken = ({
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
      d="M9.336 9.045h5.828m-5.828 3.474h3.017M20.65 8.38a3.76 3.76 0 0 0-3.76-3.76H7.61a3.76 3.76 0 0 0-3.76 3.76v5.093a3.76 3.76 0 0 0 3.76 3.76h9.28a3.76 3.76 0 0 0 3.76-3.76v-1.876M12.25 3v1.629M15.923 21l-3.672-3.74L8.578 21"
    />
  </Svg>
);
export default IconlystBoardBroken;
