import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingCloseBold = ({
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
      fillRule="evenodd"
      d="m20.45 5.318 1.061-1.06c.283-.284.283-.849 0-1.132a.79.79 0 0 0-1.132 0l-1.06 1.061-1.06-1.06a.79.79 0 0 0-1.132 0c-.354.352-.354.777 0 1.13l1.06 1.061-.99.99a.79.79 0 0 0 0 1.131c.354.354.778.354 1.132 0l.99-.99.99.99a.79.79 0 0 0 1.131 0c.354-.353.354-.778 0-1.13z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.186 10c-3 0-5.4-2.4-5.4-5.4 0-.299.025-.573.049-.834q.027-.28.04-.547a.28.28 0 0 0-.208-.28c-.931-.266-1.867-.439-2.89-.439-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5c0-.55-.045-1.046-.128-1.567-.076-.477-.293-.465-.673-.443q-.132.009-.29.01m-12.35-.36a.97.97 0 0 0-.28.68c0 .54.44.98.97.98.54 0 .98-.44.98-.98a.98.98 0 0 0-.98-.97c-.26 0-.5.1-.69.29m7.19 1.66a.98.98 0 0 1-.97-.98.97.97 0 0 1 .97-.97c.54 0 .98.44.98.97 0 .54-.44.98-.98.98m-.05 3.74c-.86 1.13-2.13 1.78-3.47 1.78s-2.61-.65-3.47-1.78c-.26-.33-.2-.8.13-1.05s.8-.19 1.05.14c.58.76 1.42 1.19 2.29 1.19s1.71-.43 2.29-1.19c.25-.33.72-.39 1.05-.14s.39.72.13 1.05"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmilingCloseBold;
