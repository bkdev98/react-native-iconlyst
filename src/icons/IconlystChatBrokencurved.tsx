import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatBrokencurved = ({
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
      strokeWidth={2}
      d="M16.19 12.413h.008M12.18 12.413h.01M8.171 12.413h.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.321 4.927c3.91 3.909 3.901 10.241 0 14.143-3.055 3.056-7.58 3.717-11.285 2.004-.546-.22-4.085.76-4.853-.007-.767-.768.213-4.307-.007-4.854C1.463 12.51 2.124 7.983 5.18 4.927 8.106 2 12.403 1.268 16.014 2.732"
    />
  </Svg>
);
export default IconlystChatBrokencurved;
