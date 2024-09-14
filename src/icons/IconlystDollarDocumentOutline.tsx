import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarDocumentOutline = ({
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
      d="M11.66 21.81H8.271a4.51 4.51 0 0 1-4.4-4.6V6.72a4.524 4.524 0 0 1 4.5-4.407h5.666a2.8 2.8 0 0 1 2.02.861l3.791 3.947a2.8 2.8 0 0 1 .78 1.94v8.166a4.543 4.543 0 0 1-4.377 4.584zm-3.285-18a3.01 3.01 0 0 0-3 2.923v10.49a3.01 3.01 0 0 0 2.937 3.085h7.91a3.046 3.046 0 0 0 2.907-3.08v-7.9h-2.054a3.316 3.316 0 0 1-3.3-3.312v-2.2h-5.4zm6.9.707v1.495a1.814 1.814 0 0 0 1.806 1.811h1.37z"
    />
    <Path
      fill={props.color}
      d="M12.042 16.8h-2.4a.75.75 0 1 1 0-1.5h2.4a.541.541 0 1 0 0-1.081h-1.476a2.04 2.04 0 1 1 0-4.082h2.4a.75.75 0 0 1 0 1.5h-2.4a.541.541 0 0 0 0 1.082h1.476a2.041 2.041 0 0 1 0 4.082"
    />
    <Path
      fill={props.color}
      d="M11.305 17.886a.75.75 0 0 1-.75-.75v-1.084a.75.75 0 0 1 1.5 0v1.084a.75.75 0 0 1-.75.75m0-6.246a.75.75 0 0 1-.75-.75V9.797a.75.75 0 1 1 1.5 0v1.093a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystDollarDocumentOutline;
