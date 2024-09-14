import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelsiusOutline = ({
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
      fillRule="evenodd"
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.271 8.166c-2.116 0-3.837 1.77-3.837 3.922a3.82 3.82 0 0 0 3.837 3.838c1.184 0 2.333-.633 3.06-1.576a.75.75 0 1 1 1.188.914c-.973 1.265-2.542 2.162-4.248 2.162a5.32 5.32 0 0 1-5.337-5.338c0-2.945 2.357-5.422 5.337-5.422.69 0 1.378.133 2.01.382a.75.75 0 1 1-.55 1.395 4 4 0 0 0-1.46-.277"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.7 10.178a1.82 1.82 0 1 1 3.637.001 1.82 1.82 0 0 1-3.638-.001m1.819-.319a.319.319 0 1 0-.001.638.319.319 0 0 0 0-.638"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCelsiusOutline;
