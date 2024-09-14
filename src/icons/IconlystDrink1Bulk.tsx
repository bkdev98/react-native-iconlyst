import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrink1Bulk = ({
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
      d="M7.113 2.5c-.34 0-.713.066-1.015.273-.33.226-.521.583-.521 1.027v1.624h4.16V3.8c0-.444-.192-.801-.521-1.027C8.914 2.566 8.54 2.5 8.2 2.5zM9.737 6.424h-4.16v.548c0 .92-.29 1.54-.894 2.333l-.316.415a5.36 5.36 0 0 0-1.1 3.253v6.42c0 1.164.944 2.107 2.106 2.107H9.94a2.106 2.106 0 0 0 2.107-2.106v-.65H7.409a.5.5 0 0 1-.5-.5V13.25a.5.5 0 0 1 .5-.5h4.633a5.37 5.37 0 0 0-1.094-3.031l-.316-.415c-.607-.794-.895-1.413-.895-2.333z"
    />
    <Path fill={props.color} d="M12.047 13.751H7.909v3.993h4.138z" />
    <Path
      fill={props.color}
      d="M13.64 12.819a3.57 3.57 0 0 0 2.773 4.06v3.371h-.792a.75.75 0 0 0 0 1.5h3.085a.75.75 0 0 0 0-1.5h-.793v-3.372a3.57 3.57 0 0 0 2.774-4.06l-.388-4.922a.5.5 0 0 0-.498-.46h-5.275a.5.5 0 0 0-.498.46z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDrink1Bulk;
