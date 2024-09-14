import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrainProcessorTwoTone = ({
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
      d="M5.521 15.084c0 2.277 1.426 3.89 3.71 3.89h6.538c2.286 0 3.704-1.613 3.704-3.89V8.922c0-2.284-1.418-3.899-3.704-3.899H9.232c-2.278 0-3.71 1.615-3.71 3.9z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.113 20.998v-2.021m4.774 2.02v-2.02M5.521 9.617H3.5m2.021 4.766H3.5M10.113 5.025V3.004m4.774 2.02v-2.02M21.5 9.617h-2.03m2.03 4.766h-2.03"
      opacity={0.4}
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M15.035 11.466c.756 0 1.369-.617 1.369-1.378M9.962 11.466a1.373 1.373 0 0 1-1.369-1.378" />
      <Path d="M12.5 8.846c0-.591.476-1.07 1.063-1.07.563 0 1.024.44 1.06.998q.197-.063.413-.064c.755 0 1.368.617 1.368 1.378 0 .346-.126.661-.334.903 1.918 1.981.334 4.397-1.444 4.18a1.067 1.067 0 0 1-1.063 1.053c-.587 0-1.063-.479-1.063-1.07zM12.497 8.846c0-.591-.476-1.07-1.063-1.07-.563 0-1.024.44-1.06.998a1.373 1.373 0 0 0-1.78 1.314c-.001.345.125.661.333.903-1.918 1.981-.334 4.397 1.444 4.18a1.067 1.067 0 0 0 1.063 1.053c.587 0 1.063-.479 1.063-1.07" />
    </G>
  </Svg>
);
export default IconlystBrainProcessorTwoTone;
