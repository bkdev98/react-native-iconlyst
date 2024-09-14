import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowSquareLight = ({
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
      d="m10.614 6.959 1.5 1.5 1.5-1.5M10.614 16.786l1.5-1.5 1.5 1.5M12.114 6v12M15.73 15.756l-.55-2.05 2.05-.548M7.22 10.842l2.049-.549-.55-2.049M17.31 14.937l-10.392-6M15.73 8.244l-.55 2.05 2.05.548M7.22 13.158l2.049.549-.55 2.049M17.31 9.063l-10.392 6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.896 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H7.896c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.114 5.081 4.957 3 7.896 3"
    />
  </Svg>
);
export default IconlystSnowSquareLight;
