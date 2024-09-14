import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderLockBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.414 13.38h-2.826a.657.657 0 0 0-.653.66v1.58c0 .364.293.66.653.66h2.826c.36 0 .653-.296.653-.66v-1.58a.657.657 0 0 0-.653-.66M12.937 11.88v-.26a.927.927 0 0 0-.942-.91.926.926 0 0 0-.93.911v.258z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.567 15.62a2.16 2.16 0 0 1-2.153 2.16h-2.826a2.16 2.16 0 0 1-2.153-2.16v-1.58c0-.818.46-1.522 1.129-1.89v-.54a2.417 2.417 0 0 1 2.406-2.4 2.37 2.37 0 0 1 1.722.678 2.42 2.42 0 0 1 .745 1.722v.54a2.15 2.15 0 0 1 1.13 1.89zm.827-9.931h-2.652a1.65 1.65 0 0 1-1.313-.66l-.855-1.14a2.64 2.64 0 0 0-2.111-1.05H7.588C4.164 2.84 2.5 4.744 2.5 8.66v7.32c0 3.65 2.184 5.83 5.844 5.83h7.296c3.653 0 5.833-2.18 5.833-5.827l.027-4.663c0-3.841-1.622-5.63-5.106-5.63"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderLockBold;
