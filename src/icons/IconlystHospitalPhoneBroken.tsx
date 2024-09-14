import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalPhoneBroken = ({
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
      d="m18.56 12.804.747 3.8c.46 2.367-1.503 4.077-3.888 4.077H8.57c-2.386 0-4.186-1.71-3.87-4.077l.737-3.8"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.913 17.228h-1.827a.344.344 0 0 1-.344-.345V15.47H9.327a.343.343 0 0 1-.344-.344v-1.831c0-.19.154-.344.344-.344h1.416v-1.414c0-.19.154-.344.344-.344h1.827c.19 0 .344.154.344.344v1.413h1.416c.19 0 .344.155.344.345v1.831c0 .19-.154.344-.344.344h-1.416v1.413c0 .191-.154.345-.344.345"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 3.318c9.674 0 8.96 3.47 9.002 3.861 0 3.468-1.058 2.947-3.788 2.947-2.831 0-.767-3.389-5.214-3.389s-2.38 3.391-5.21 3.392C4.058 10.13 3 10.641 3 7.182c.035-.323-.45-2.752 4.847-3.585"
    />
  </Svg>
);
export default IconlystHospitalPhoneBroken;
