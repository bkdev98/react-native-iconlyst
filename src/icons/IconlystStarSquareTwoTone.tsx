import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarSquareTwoTone = ({
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
      d="M7.896 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H7.896c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.114 5.081 4.957 3 7.896 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.114 3.098v2.217M12.114 20.872v-2.217M15.046 3.098v4.326M15.046 20.872v-4.326M18.114 3.375V9.5M18.114 20.595V14.47M12.114 7.75a6.39 6.39 0 0 0 4.25 4.25 6.39 6.39 0 0 0-4.25 4.25A6.39 6.39 0 0 0 7.864 12a6.39 6.39 0 0 0 4.25-4.25"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStarSquareTwoTone;
