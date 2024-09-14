import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailUploadOutline = ({
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
      d="M7.817 20.85a5.05 5.05 0 0 1-3.642-1.48A5.96 5.96 0 0 1 2.5 15.09V8.913A5.44 5.44 0 0 1 7.832 3.15h8.836A5.44 5.44 0 0 1 22 8.913v1.677a.75.75 0 1 1-1.5 0V8.913c0-2.47-1.612-4.263-3.832-4.263H7.832C5.612 4.65 4 6.443 4 8.913v6.177a4.47 4.47 0 0 0 1.234 3.213 3.58 3.58 0 0 0 2.586 1.043h4.348a.75.75 0 1 1 0 1.5H7.817z"
    />
    <Path
      fill={props.color}
      d="M12.272 13.62a2.8 2.8 0 0 1-1.75-.615L6.483 9.75a.75.75 0 1 1 .942-1.168l4.032 3.252a1.314 1.314 0 0 0 1.638 0l3.991-3.246a.75.75 0 0 1 .946 1.164l-4 3.252c-.5.399-1.121.615-1.76.615M21.25 17.727a.75.75 0 0 1-.531-.221l-2.03-2.038-2.03 2.038a.75.75 0 0 1-1.062-1.058l2.56-2.572a.77.77 0 0 1 1.063 0l2.56 2.572a.75.75 0 0 1-.53 1.279"
    />
    <Path
      fill={props.color}
      d="M18.688 20.85a.75.75 0 0 1-.75-.75v-5.696a.75.75 0 1 1 1.5 0V20.1a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystEmailUploadOutline;
