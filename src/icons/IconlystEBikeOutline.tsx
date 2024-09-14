import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEBikeOutline = ({
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
      fillRule="evenodd"
      d="M17.708 11.402a2.793 2.793 0 1 0 0 5.586 2.793 2.793 0 0 0 0-5.586m-4.293 2.793a4.293 4.293 0 1 1 8.585 0 4.293 4.293 0 0 1-8.585 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.497 8.907a.75.75 0 0 1 .75-.75h6.874a.75.75 0 0 1 0 1.5h-6.14c-.037.734-.14 1.442-.391 2.147-.339.951-.926 1.842-1.878 2.782a.75.75 0 1 1-1.054-1.067c.828-.818 1.271-1.524 1.519-2.218.25-.703.32-1.449.32-2.394"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.893 3.678a.75.75 0 0 1-.396.984l-1.617.688 2.546 8.487a.75.75 0 1 1-1.437.43L14.25 5.139a.75.75 0 0 1 .425-.905l2.235-.951a.75.75 0 0 1 .983.396M5.6 6.406a.75.75 0 0 1 .75-.75h2.654a.75.75 0 0 1 0 1.5H6.35a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.982 5.8a.75.75 0 0 1 1.048.164l1.826 2.501a.75.75 0 1 1-1.211.885L6.819 6.849A.75.75 0 0 1 6.982 5.8M2.5 14.863a4.96 4.96 0 0 1 4.96-4.96 4.259 4.259 0 1 1-.001 8.517.75.75 0 1 1 0-1.5 2.759 2.759 0 0 0 .001-5.518A3.46 3.46 0 0 0 4 14.862c0 2.984 2.395 4.995 5.566 4.995h.35a.75.75 0 0 1 0 1.5h-.35c-3.806 0-7.066-2.501-7.066-6.494"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.107 20.167a.44.44 0 0 0 0 .88h.44v-.88zm1.94 0h.638a.75.75 0 0 0 0-1.5h-2.578a1.94 1.94 0 1 0 0 3.88h2.578a.75.75 0 0 0 0-1.5h-.637z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEBikeOutline;
