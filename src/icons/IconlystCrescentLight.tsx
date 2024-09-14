import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrescentLight = ({
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
      strokeWidth={1.343}
      d="M16.567 13.271c.023-.012.051.009.044.035a4.7 4.7 0 0 1-4.512 3.405 4.695 4.695 0 0 1-1.294-9.207c.025-.007.046.02.034.044a4.24 4.24 0 0 0 .75 4.977 4.23 4.23 0 0 0 4.978.746"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.114 3v1.372m0 15.256V21m9-9h-1.372M4.486 12H3.114m15.364-6.364-.97.97M6.721 17.394l-.97.97m12.727 0-.97-.97M6.721 6.606l-.97-.97"
    />
  </Svg>
);
export default IconlystCrescentLight;
