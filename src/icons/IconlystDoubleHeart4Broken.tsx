import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart4Broken = ({
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
      d="M20.857 14.672c.891-1.245.88-3-.421-3.941a2.6 2.6 0 0 0-1.139-.452c-.41-.06-.864.09-1.257.222-.24-.338-.521-.725-.89-.916a2.6 2.6 0 0 0-1.19-.293c-1.604.001-2.634 1.426-2.635 2.958.013 2.46 2.594 4.85 2.594 4.85s1.24-.157 2.542-.695"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.307 13.92c-1.326-2.1-1.129-4.936 1.06-6.33a4.16 4.16 0 0 1 1.885-.618c.657-.06 1.383.225 2.001.47.423-.52.914-1.117 1.532-1.393a4.4 4.4 0 0 1 1.944-.353c2.13.127 3.533 1.747 3.886 3.69M14.564 15.648c-1.227 1.6-2.512 2.66-2.512 2.66s-3.045-.573-5.486-2.181"
    />
  </Svg>
);
export default IconlystDoubleHeart4Broken;
