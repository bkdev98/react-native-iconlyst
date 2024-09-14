import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailDownloadOutline = ({
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
      d="M7.813 20.85a5.05 5.05 0 0 1-3.642-1.48 5.96 5.96 0 0 1-1.675-4.28V8.913A5.44 5.44 0 0 1 7.828 3.15h8.836a5.44 5.44 0 0 1 5.332 5.763v1.677a.75.75 0 1 1-1.5 0V8.913c0-2.47-1.612-4.263-3.832-4.263H7.828c-2.22 0-3.832 1.793-3.832 4.263v6.177a4.47 4.47 0 0 0 1.234 3.213 3.58 3.58 0 0 0 2.586 1.043h4.348a.75.75 0 1 1 0 1.5h-4.35z"
    />
    <Path
      fill={props.color}
      d="M12.268 13.62a2.8 2.8 0 0 1-1.75-.615L6.48 9.75a.75.75 0 1 1 .942-1.168l4.032 3.252a1.314 1.314 0 0 0 1.638 0l3.991-3.246a.75.75 0 1 1 .946 1.164l-4 3.252c-.5.399-1.12.615-1.76.615M18.683 20.85a.75.75 0 0 1-.53-.22l-2.562-2.572A.75.75 0 1 1 16.653 17l2.03 2.038L20.713 17a.75.75 0 1 1 1.062 1.058l-2.56 2.572a.75.75 0 0 1-.532.22"
    />
    <Path
      fill={props.color}
      d="M18.684 20.85a.75.75 0 0 1-.75-.75v-5.696a.75.75 0 1 1 1.5 0V20.1a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystEmailDownloadOutline;
