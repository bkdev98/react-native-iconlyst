import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileHashtagTwoTone = ({
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
      d="M16.366 20.987c3.355 0 5.332-1.978 5.332-5.332l.027-4.656c0-3.423-1.242-5.135-4.606-5.135h-2.653a2.15 2.15 0 0 1-1.712-.856l-.856-1.138a2.14 2.14 0 0 0-1.71-.856H8.311c-3.355 0-4.587 1.977-4.587 5.328v7.313c0 3.354 1.98 5.332 5.344 5.332z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.955 16.19.72-5.676m2.118 5.676.72-5.676m1.211 1.44H9.971m5.507 2.795H9.725"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFolderFileHashtagTwoTone;
