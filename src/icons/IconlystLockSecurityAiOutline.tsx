import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockSecurityAiOutline = ({
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
      d="M15.234 3.573a.75.75 0 0 1 1.001-.35 9.75 9.75 0 0 1 5.515 8.785 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75.75.75 0 0 1 1.5 0 8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-4.667-7.434.75.75 0 0 1-.35-1.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.168 11.663a2.835 2.835 0 0 1 5.67 0c0 .735-.281 1.399-.736 1.898l.492 1.482a1.635 1.635 0 0 1-1.55 2.15h-2.081a1.634 1.634 0 0 1-1.55-2.15l.492-1.482a2.8 2.8 0 0 1-.737-1.898m2.835-1.335c-.737 0-1.335.598-1.335 1.335 0 .436.212.823.547 1.07a.75.75 0 0 1 .267.84l-.646 1.942a.134.134 0 0 0 .127.177h2.081c.09 0 .156-.089.127-.177l-.646-1.942a.75.75 0 0 1 .267-.84c.334-.247.546-.633.546-1.07 0-.738-.597-1.335-1.335-1.335M5.596 3.5a.75.75 0 0 0-.704.49l-.1.273a3.01 3.01 0 0 1-1.78 1.782l-.273.101a.75.75 0 0 0 0 1.407l.273.1a3.01 3.01 0 0 1 1.78 1.782l.1.274a.75.75 0 0 0 1.407 0l.101-.274A3.01 3.01 0 0 1 8.18 7.654l.273-.101a.75.75 0 0 0 0-1.407l-.273-.101A3.01 3.01 0 0 1 6.4 4.263l-.1-.273a.75.75 0 0 0-.704-.49m.948 3.35a4.5 4.5 0 0 0-.948.949 4.5 4.5 0 0 0-.949-.95c.362-.267.682-.587.949-.95.267.363.587.683.948.95M10.906 2.258a.75.75 0 0 0-.717.532 1.02 1.02 0 0 1-.678.679.75.75 0 0 0 0 1.435c.324.099.579.353.678.679a.75.75 0 0 0 1.435 0c.099-.326.353-.58.678-.68a.75.75 0 0 0 0-1.434 1.02 1.02 0 0 1-.678-.68.75.75 0 0 0-.718-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockSecurityAiOutline;
