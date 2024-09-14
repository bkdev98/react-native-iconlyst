import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber2CircleOutline = ({
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
      d="M12.5 9.133c-.77 0-1.396.625-1.396 1.395a.75.75 0 0 1-1.5 0 2.896 2.896 0 0 1 5.79 0c0 .904-.373 1.582-.874 2.114-.428.454-.978.827-1.454 1.151l-.143.097c-.828.565-1.444 1.042-1.695 1.743h3.417a.75.75 0 0 1 0 1.5h-4.289a.75.75 0 0 1-.75-.75c0-2.02 1.42-3.014 2.471-3.732l.12-.081c.51-.348.923-.63 1.232-.957.303-.322.466-.649.466-1.085 0-.77-.626-1.395-1.396-1.395"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 4.133a8.25 8.25 0 0 0-8.25 8.25 8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-8.25-8.25m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber2CircleOutline;
