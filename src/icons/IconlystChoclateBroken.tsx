import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChoclateBroken = ({
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
      d="M18.226 6.618c-2.094-.118-3.28-.687-3.56-2.625-.08-.56-.535-.992-1.101-.992H7.427a2.715 2.715 0 0 0-2.715 2.715v12.568c0 1.5 1.216 2.716 2.715 2.716h9.146c1.5 0 2.715-1.216 2.715-2.716V7.726c0-.593-.47-1.075-1.062-1.108"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.288 15.12H4.712M4.712 9.247h11.04M12.001 18.554V3"
    />
  </Svg>
);
export default IconlystChoclateBroken;
