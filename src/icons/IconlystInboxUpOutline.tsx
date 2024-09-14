import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxUpOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M16.668 22.177H8.411c-3.245 0-5.426-2.287-5.426-5.69V8.679c0-2.989 1.75-5.19 4.455-5.6a.75.75 0 0 1 .228 1.482c-1.963.3-3.183 1.882-3.183 4.123v7.807c0 2.546 1.541 4.19 3.926 4.19h8.257c2.39 0 3.935-1.645 3.935-4.19V8.684a3.82 3.82 0 0 0-3.186-4.123.75.75 0 0 1 .234-1.481 5.3 5.3 0 0 1 4.452 5.6v7.807c0 3.403-2.184 5.69-5.435 5.69"
    />
    <Path
      fill={props.color}
      d="M9.8 6.773a.75.75 0 0 1-.522-1.29l2.746-2.658a.75.75 0 0 1 1.044 0l2.746 2.659a.749.749 0 0 1-.51 1.289.75.75 0 0 1-.534-.211l-2.224-2.154-2.224 2.154a.75.75 0 0 1-.522.21"
    />
    <Path
      fill={props.color}
      d="M12.544 11.353a.75.75 0 0 1-.75-.75V3.367a.75.75 0 0 1 1.5 0V10.6a.75.75 0 0 1-.75.753M12.543 17.326a3.59 3.59 0 0 1-3.236-2.013 1.52 1.52 0 0 0-1.374-.856h-4.19a.75.75 0 1 1 0-1.5h4.19a3.01 3.01 0 0 1 2.718 1.692 2.107 2.107 0 0 0 3.782 0 3.02 3.02 0 0 1 2.72-1.691h4.19a.75.75 0 0 1 0 1.5H17.15a1.53 1.53 0 0 0-1.374.856 3.59 3.59 0 0 1-3.233 2.012"
    />
  </Svg>
);
export default IconlystInboxUpOutline;
