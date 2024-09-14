import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerBroken = ({
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
      d="M19.195 13v4.316A3.684 3.684 0 0 1 15.51 21H8.99a3.684 3.684 0 0 1-3.684-3.684V6.685A3.685 3.685 0 0 1 8.989 3h6.522a3.684 3.684 0 0 1 3.684 3.685v2.658"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 17.389a3.497 3.497 0 1 0-2.417-.97M13.653 6.611h-2.807"
    />
  </Svg>
);
export default IconlystSpeakerBroken;
