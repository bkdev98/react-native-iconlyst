import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowTreeTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.18 18.2c1.13-1.215 2.092-2.641 2.895-4.272H8c1.718-2.014 3.195-4.408 4.512-7.032 1.317 2.624 2.795 5.018 4.512 7.032H14.95c.803 1.63 1.766 3.057 2.895 4.271z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.512 18.225v3.131M9.51 12.04l5.152-1.22M8.787 16.209l6.496-1.538M19.547 6.896a2.56 2.56 0 0 0 1.703 1.703 2.56 2.56 0 0 0-1.703 1.703A2.56 2.56 0 0 0 17.844 8.6a2.56 2.56 0 0 0 1.703-1.703M4.966 3.874v5.115m2.213-3.836L2.75 7.71m4.43 0L2.75 5.153"
      opacity={0.4}
    />
    <Circle
      cx={12.511}
      cy={5.559}
      r={1.127}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystSnowTreeTwoTone;
