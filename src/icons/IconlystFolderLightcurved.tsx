import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderLightcurved = ({
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
      d="M7.306 14.574h9.593"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.5 7.798c0-2.442 1.25-4.539 3.622-5.025 2.371-.488 4.173-.32 5.67.488 1.498.808 1.069 2 2.608 2.875 1.54.877 4.017-.44 5.635 1.306 1.694 1.828 1.685 4.634 1.685 6.422 0 6.796-3.807 7.335-9.61 7.335s-9.61-.47-9.61-7.335z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderLightcurved;
