import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiskMusicSquarePauseBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M10.514 9.547a3.06 3.06 0 0 0-3.059 3.059 3.06 3.06 0 0 0 3.06 3.059 3.06 3.06 0 0 0 3.058-3.06 3.06 3.06 0 0 0-3.059-3.058M17.408 8.89a.278.278 0 0 0 0-.556.277.277 0 1 0 0 .555" />
      <Path d="M18.157 10.218v4.755a.75.75 0 0 1-.22.531l-1.442 1.443a.747.747 0 0 1-1.06 0 .75.75 0 0 1 0-1.061l1.222-1.223v-4.446a1.78 1.78 0 0 1-1.026-1.606c0-.98.797-1.777 1.777-1.777s1.777.797 1.777 1.777c0 .712-.423 1.323-1.028 1.607m-7.643 6.947a4.564 4.564 0 0 1-4.559-4.559 4.565 4.565 0 0 1 4.56-4.559 4.565 4.565 0 0 1 4.558 4.559 4.564 4.564 0 0 1-4.559 4.559M16.787 2.25H8.352c-3.309 0-5.532 2.322-5.532 5.776v7.948c0 3.455 2.223 5.776 5.532 5.776h8.434c3.31 0 5.534-2.321 5.534-5.776V8.026c0-3.454-2.224-5.776-5.533-5.776" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.514 17.165a4.564 4.564 0 0 1-4.559-4.559 4.565 4.565 0 0 1 4.56-4.559 4.565 4.565 0 0 1 4.558 4.559 4.564 4.564 0 0 1-4.559 4.559m-3.059-4.56a3.06 3.06 0 0 1 3.06-3.058 3.06 3.06 0 0 1 3.058 3.059 3.06 3.06 0 0 1-3.059 3.059 3.06 3.06 0 0 1-3.059-3.06M18.157 10.218v4.755a.75.75 0 0 1-.22.531l-1.442 1.443a.747.747 0 0 1-1.06 0 .75.75 0 0 1 0-1.061l1.222-1.223v-4.446a1.78 1.78 0 0 1-1.026-1.606c0-.98.797-1.777 1.777-1.777s1.777.797 1.777 1.777c0 .712-.423 1.323-1.028 1.607m-.472-1.607a.28.28 0 0 1-.277.278.278.278 0 0 1 0-.555c.153 0 .277.124.277.277"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiskMusicSquarePauseBulk;
