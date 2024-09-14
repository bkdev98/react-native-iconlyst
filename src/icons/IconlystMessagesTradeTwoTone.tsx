import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesTradeTwoTone = ({
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
      d="M9.009 21.02a8.98 8.98 0 0 0 10.156-1.81c3.512-3.524 3.517-9.241 0-12.771a8.986 8.986 0 0 0-12.728 0c-2.75 2.76-3.345 6.847-1.803 10.19.198.495.352.892.352 1.278 0 1.078-1.037 2.412-.346 3.105s2.021-.346 3.09-.352c.383 0 .787.16 1.279.36"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.818 11.542 1.64-1.587 1.64 1.586M16.785 14.111l-1.64 1.587-1.64-1.587M10.457 9.955v5.271M15.145 15.698v-5.272"
    />
  </Svg>
);
export default IconlystMessagesTradeTwoTone;
