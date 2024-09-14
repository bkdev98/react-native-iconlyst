import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBroomTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.677 3.168a2.54 2.54 0 0 0-2.541 2.54l.248 2.048a2.097 2.097 0 0 1-2.082 2.35H6.565c-.977 0-1.77.79-1.772 1.768v.006a1.775 1.775 0 0 0 1.776 1.781h12.228a1.776 1.776 0 1 0-.003-3.551l-1.738.003a2.095 2.095 0 0 1-2.083-2.342l.245-2.062a2.54 2.54 0 0 0-2.541-2.541"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.412 13.668v2.557c-.09 2.226.942 3.674 1.014 3.791.286.47.058 1.02-.477 1.147-.009.003-7.112.004-9.531.005a.86.86 0 0 1-.856-.798l-.15-1.975-1.175 1.847a2 2 0 0 1-1.69.925c-.562 0-1.13-.003-1.135-.004-.535-.127-.763-.678-.477-1.147.07-.117 1.103-1.565 1.014-3.79v-2.558"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.682 5.762v-.01"
    />
  </Svg>
);
export default IconlystBroomTwoTone;
