import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRedcurrantOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.77 4.634a.75.75 0 0 1 .515.928C19.406 8.638 15.24 15.864 6.4 18.31a.75.75 0 1 1-.4-1.445C14.22 14.589 18.07 7.849 18.843 5.15a.75.75 0 0 1 .927-.516"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.665 17.245a.915.915 0 1 0 0 1.83.915.915 0 0 0 0-1.83m-2.415.915a2.415 2.415 0 1 1 4.83 0 2.415 2.415 0 0 1-4.83 0M6.454 11.977a.915.915 0 1 0 0 1.83.915.915 0 0 0 0-1.83m-2.415.915a2.415 2.415 0 1 1 4.83 0 2.415 2.415 0 0 1-4.83 0M11.423 9.391a.915.915 0 1 0 0 1.83.915.915 0 0 0 0-1.83m-2.415.915a2.415 2.415 0 1 1 4.83 0 2.415 2.415 0 0 1-4.83 0M10.874 16.673a.915.915 0 1 0 0 1.83.915.915 0 0 0 0-1.83m-2.415.915a2.415 2.415 0 1 1 4.83 0 2.415 2.415 0 0 1-4.83 0M15.649 13.343a.915.915 0 1 0 0 1.83.915.915 0 0 0 0-1.83m-2.415.915a2.415 2.415 0 1 1 4.83 0 2.415 2.415 0 0 1-4.83 0M19.335 8.865a.915.915 0 1 0 0 1.83.915.915 0 0 0 0-1.83m-2.415.915a2.415 2.415 0 1 1 4.83 0 2.415 2.415 0 0 1-4.83 0M14.902 4.95a.915.915 0 1 0 0 1.83.915.915 0 0 0 0-1.83m-2.415.915a2.415 2.415 0 1 1 4.83 0 2.415 2.415 0 0 1-4.83 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRedcurrantOutline;
