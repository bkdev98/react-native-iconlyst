import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbell1Broken = ({
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
      d="M10.586 16.194c.28.361.598.94.464 1.643-.18.936-2.314 2.955-3.074 3.116-.516.132-1.224.11-3.132-1.797-1.907-1.907-1.93-2.616-1.797-3.132.161-.761 2.179-2.894 3.117-3.074.701-.135 1.281.184 1.642.464.232.18.563.15.77-.057l4.781-4.781a.586.586 0 0 0 .057-.77c-.28-.36-.599-.94-.464-1.642.18-.938 2.314-2.957 3.074-3.117.516-.133 1.225-.11 3.132 1.797s1.93 2.616 1.796 3.132c-.16.76-2.179 2.893-3.117 3.073-.701.136-1.28-.183-1.64-.463a.586.586 0 0 0-.771.056l-2.39 2.392"
    />
  </Svg>
);
export default IconlystDumbbell1Broken;
