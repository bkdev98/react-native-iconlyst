import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileCloudBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.625 14.449c.74-1.68 2.38-3.05 4.65-3.05 2.23 0 3.856 1.334 4.62 2.983q.031.066.096.099.16.08.311.17c.142.086.335-.01.336-.176l.027-3.596c0-3.85-1.62-5.64-5.1-5.64h-2.66c-.51 0-1-.25-1.31-.66l-.86-1.14a2.63 2.63 0 0 0-2.11-1.05h-1.87c-3.42 0-5.09 1.91-5.09 5.83v7.31c0 3.65 2.19 5.83 5.85 5.83h.954c.162 0 .26-.185.177-.324a4.55 4.55 0 0 1-.641-2.366c.01-1.9 1.05-3.48 2.62-4.22"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.588 15.956c-.28-1.221-1.309-2.6-3.182-2.6s-2.904 1.379-3.183 2.6c-1.298.283-2.19 1.375-2.198 2.796-.005 1.125.657 2.152 1.717 2.632a3.1 3.1 0 0 0 1.133.228h5.058c.37 0 .774-.08 1.165-.238a2.88 2.88 0 0 0 1.686-2.618c0-1.424-.892-2.518-2.196-2.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileCloudBulk;
