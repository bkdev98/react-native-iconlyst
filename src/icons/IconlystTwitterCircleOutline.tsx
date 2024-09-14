import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M10.46 17.079c-.9 0-2.84-.17-3.93-1.47a.75.75 0 0 1-.1-.81c.13-.26.41-.45.7-.42.46.02.91-.05 1.33-.19-1.51-1.36-2.03-3.38-1.56-6.13.05-.28.25-.51.51-.59.27-.09.56-.01.76.19.81.82 1.83 1.41 2.93 1.7.21-1 .88-1.99 1.96-2.32 1.28-.39 2.34.24 2.92.83l.93.02c.28 0 .53.17.66.41.12.25.1.55-.06.77l-.73 1.02c.06 1.8-.43 3.46-1.38 4.69-1.07 1.38-2.64 2.17-4.54 2.29-.08 0-.22.01-.41.01zm-1.13-1.61c.49.1 1 .13 1.44.1 1.46-.09 2.65-.68 3.45-1.71.78-1 1.16-2.4 1.06-3.94-.01-.17.04-.34.14-.48l.06-.09a.8.8 0 0 1-.44-.28c-.02-.03-.65-.85-1.53-.59-.75.23-1.02 1.21-.96 1.69a.75.75 0 0 1-.22.63c-.17.16-.39.24-.63.21a7.9 7.9 0 0 1-3.47-1.35c-.07 2.45 1.02 3.42 2.04 3.99.23.13.37.36.38.62s-.11.51-.32.65c-.32.22-.66.4-1.01.55z"
    />
  </Svg>
);
export default IconlystTwitterCircleOutline;
