import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize9Light = ({
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
      d="M10.231 4h-1.98C5.638 4 4 5.85 4 8.468v7.064C4 18.15 5.63 20 8.25 20h7.498C18.368 20 20 18.15 20 15.532v-1.547M20 7.953V4m0 0h-3.954m3.953 0-8.628 8.628m0 0V8.675m0 3.953h3.954"
    />
  </Svg>
);
export default IconlystResize9Light;
