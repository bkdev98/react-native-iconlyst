import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst3GCircleOutline = ({
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
      d="M12.25 4.625a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75c0 5.384-4.365 9.75-9.75 9.75s-9.75-4.366-9.75-9.75m9.574-.163c.07-1.723 1.5-3.283 3.338-3.191.472.022.92.144 1.322.344a.75.75 0 1 1-.667 1.343 1.8 1.8 0 0 0-.728-.19h-.001c-.892-.044-1.724.747-1.766 1.756-.048 1.158.69 1.96 1.67 1.96.37 0 .56-.069.64-.126a.2.2 0 0 0 .063-.073.54.54 0 0 0 .038-.23v-.68h-.74a.75.75 0 0 1 0-1.5h1.49a.75.75 0 0 1 .75.75v1.43c0 .637-.241 1.18-.736 1.528-.447.316-1.002.402-1.504.402-1.99 0-3.246-1.678-3.17-3.523m-5.055-2.439a.75.75 0 0 1 .75-.75h2.8a.75.75 0 0 1 .584 1.222l-.924 1.143a2.355 2.355 0 1 1-2.935 3.648.75.75 0 0 1 1.06-1.06.855.855 0 1 0 .605-1.459.75.75 0 0 1-.583-1.221L9 11.023H7.769a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst3GCircleOutline;
