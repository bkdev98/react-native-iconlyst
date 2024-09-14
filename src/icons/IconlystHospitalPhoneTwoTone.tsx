import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalPhoneTwoTone = ({
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
      d="m19.47 12.805.747 3.8c.46 2.366-1.503 4.076-3.888 4.076H9.481c-2.386 0-4.186-1.71-3.87-4.077l.737-3.8"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.823 17.23h-1.827a.344.344 0 0 1-.343-.345v-1.414h-1.417a.343.343 0 0 1-.343-.343v-1.831c0-.19.153-.344.343-.344h1.417v-1.414c0-.19.153-.344.343-.344h1.827c.19 0 .344.154.344.344v1.414h1.417c.19 0 .343.154.343.344v1.831c0 .19-.154.344-.343.344h-1.417v1.413c0 .191-.154.345-.344.345M12.908 6.74c-4.447 0-2.38 3.39-5.21 3.391-2.73 0-3.788.512-3.788-2.947.043-.391-.676-3.863 8.998-3.864 9.675 0 8.96 3.47 9.002 3.861 0 3.468-1.058 2.947-3.788 2.947-2.831 0-.766-3.389-5.214-3.389"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHospitalPhoneTwoTone;
