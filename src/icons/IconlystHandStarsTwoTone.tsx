import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandStarsTwoTone = ({
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
      d="M10.594 16.7c.714-.104 1.442.002 2.163-.015 1.673-.04 2.985-1.455 4.259-2.415a1.63 1.63 0 0 1 2.137.154c.64.64.64 1.68 0 2.322-1.376 1.38-2.59 2.662-4.456 3.388-2.587 1.006-4.987.517-7.608 0-1.014-.201-1.948-.213-2.975-.213"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.592 16.66h1.412c1.01 0 1.824-.726 1.824-1.735 0-.838-.567-1.508-1.38-1.712-1.163-.292-2.324-.52-3.538-.492-1.925.047-3.27 1.119-4.796 2.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.476 3.79.14.38a5.22 5.22 0 0 0 3.083 3.083l.38.14-.38.14a5.22 5.22 0 0 0-3.083 3.084l-.14.378-.14-.378a5.22 5.22 0 0 0-3.084-3.084l-.379-.14.379-.14a5.22 5.22 0 0 0 3.083-3.084zM8.105 2.341a3.13 3.13 0 0 0 2.082 2.082 3.13 3.13 0 0 0-2.082 2.082 3.13 3.13 0 0 0-2.082-2.082 3.13 3.13 0 0 0 2.082-2.082"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHandStarsTwoTone;
