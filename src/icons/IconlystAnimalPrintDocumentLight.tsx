import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnimalPrintDocumentLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.963 21.3h8.074a4.12 4.12 0 0 0 4.12-4.119v-9.76a4.12 4.12 0 0 0-4.12-4.12H7.963a4.12 4.12 0 0 0-4.12 4.12v9.76a4.12 4.12 0 0 0 4.12 4.12M15.487 17.275h-6.62"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.994 6.89v-.052m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.259 8.548v-.052m-.007-.152a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M8.744 8.548v-.052m-.006-.152a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.026 13.472c1.368 0 3.102 1.186 3.077-.639-.01-1.368-1.434-2.652-3.077-2.653-1.652 0-3.293 1.395-3.065 2.818.252 1.649 1.853.474 3.065.474Z"
    />
  </Svg>
);
export default IconlystAnimalPrintDocumentLight;
