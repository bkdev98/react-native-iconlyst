import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M18.865 5.124c.437.153.729.565.729 1.028v6.773c0 1.893-.688 3.7-1.903 5.1-.611.705-1.384 1.254-2.205 1.698l-3.558 1.922-3.564-1.923c-.822-.444-1.596-.992-2.208-1.698A7.78 7.78 0 0 1 4.25 12.92V6.15c0-.462.292-.874.729-1.027l6.582-2.313a1.1 1.1 0 0 1 .722 0z" />
      <Path d="m9.323 11.918 1.892 1.893 3.898-3.898" opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystShieldDoneTwoTone;
