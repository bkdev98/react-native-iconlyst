import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileAddPlusLight = ({
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
      d="M20.974 15.655c0 3.354-1.977 5.332-5.333 5.332H8.345C4.98 20.987 3 19.01 3 15.655V8.342C3 4.99 4.232 3.014 7.588 3.014h1.875a2.14 2.14 0 0 1 1.71.856l.857 1.138a2.15 2.15 0 0 0 1.712.856h2.653C19.758 5.864 21 7.576 21 11z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.298 13.195H9.703m2.299 2.298v-4.595"
    />
  </Svg>
);
export default IconlystFolderFileAddPlusLight;
