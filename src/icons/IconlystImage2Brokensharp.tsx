import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImage2Brokensharp = ({
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.897 7.124a2.055 2.055 0 1 1-2.055 2.055"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m5.512 18.507 1.884-2.505h.114l2.826 2.536h.205l4.316-6.281h.157l3.173 4.476"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M21.5 14.549V3.354H3v18.5h18.5v-3.03"
    />
  </Svg>
);
export default IconlystImage2Brokensharp;
