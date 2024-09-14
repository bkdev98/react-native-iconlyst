import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftEdgeLight = ({
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
      d="M3 12a9 9 0 0 0 16.429 5.082l-.047.014c-4.257 1.018-10 .211-10.386-5.096a3.004 3.004 0 1 1 5.658 1.408c1.88.927 6.55 1.053 6.34-1.941l-.024-.211A9 9 0 0 0 3 12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.03 12.723c.209-5.753 9.501-6.911 11.56-2.304"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.517 20.936c-2.994.21-5.635-5.112-3.297-10.084"
    />
  </Svg>
);
export default IconlystMicrosoftEdgeLight;
