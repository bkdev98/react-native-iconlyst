import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuoraOutline = ({
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
      d="M10.86 3.75c-3.738 0-6.796 3.1-6.796 6.957 0 3.858 3.058 6.957 6.796 6.957a.75.75 0 1 1 0 1.5c-4.597 0-8.296-3.801-8.296-8.457s3.7-8.457 8.296-8.457 8.295 3.802 8.295 8.457a8.6 8.6 0 0 1-.732 3.477.75.75 0 0 1-1.338.068 21 21 0 0 1-.275-.504c-.45-.843-.845-1.584-2.116-2.412a.75.75 0 0 1-.34-.629c0-2.774-1.727-4.69-3.494-4.69s-3.495 1.916-3.495 4.69q0 .206.013.405a.75.75 0 1 1-1.497.097 8 8 0 0 1-.016-.502c0-3.235 2.074-6.19 4.995-6.19 2.799 0 4.82 2.714 4.983 5.787.81.58 1.32 1.161 1.692 1.709a7 7 0 0 0 .12-1.306c0-3.857-3.058-6.957-6.796-6.957"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.896 11.665c1.526.484 2.783 1.82 3.513 4.048.25.764.596 1.17.919 1.385s.697.288 1.088.253a2.6 2.6 0 0 0 1.101-.372c.153-.094.274-.191.357-.277a.6.6 0 0 0 .109-.136q0-.002 0 0a.75.75 0 0 1 1.453.273c-.022 1.29-.324 2.489-1.048 3.394-.743.928-1.852 1.45-3.273 1.513a3.94 3.94 0 0 1-2.621-.84c-.85-.653-1.585-1.7-2.139-3.24-.434-1.209-.728-1.869-1.131-2.275-.352-.354-.872-.59-2.004-.642a.75.75 0 0 1-.677-.51l-.302-.904a.75.75 0 0 1 .286-.856c1.276-.877 2.861-1.29 4.369-.814m-2.831 1.656c.803-.373 1.636-.46 2.378-.226.937.297 1.913 1.169 2.54 3.085.33 1.008.85 1.725 1.513 2.166.66.441 1.391.559 2.055.499a4 4 0 0 0 1.069-.252q-.164.403-.403.703c-.427.532-1.1.904-2.169.951a2.44 2.44 0 0 1-1.64-.53c-.56-.431-1.155-1.206-1.64-2.558l-.707.253.706-.253c-.414-1.153-.802-2.143-1.48-2.825-.576-.58-1.297-.883-2.222-1.013"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQuoraOutline;
