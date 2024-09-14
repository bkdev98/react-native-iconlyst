import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoryBoldsharp = ({
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
      d="M2.3 10.95h8v-8h-8zM22.2 4.121l-7.729-2.07-2.07 7.727 7.727 2.07zM2.3 21.95h8v-8h-8zM13.3 21.95h8v-8h-8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCategoryBoldsharp;
