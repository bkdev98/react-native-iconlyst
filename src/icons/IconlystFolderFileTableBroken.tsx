import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileTableBroken = ({
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
      d="M11.116 10.147h3.217c1.125 0 1.825.793 1.825 1.917v2.576c0 1.123-.7 1.917-1.825 1.917h-3.217c-1.125 0-1.825-.794-1.825-1.917v-2.576c0-1.124.703-1.918 1.825-1.918M12.725 16.557v-6.41M9.291 13.352h6.867"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.444 20.986H9.069c-3.363 0-5.344-1.979-5.344-5.333V8.34c0-3.351 1.232-5.328 4.587-5.328h1.875a2.14 2.14 0 0 1 1.711.856l.856 1.138a2.15 2.15 0 0 0 1.712.856h2.653c3.364 0 4.606 1.712 4.606 5.135l-.027 4.656c0 3.354-1.977 5.332-5.332 5.332h-.607"
    />
  </Svg>
);
export default IconlystFolderFileTableBroken;
