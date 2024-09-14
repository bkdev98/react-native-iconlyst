import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldQuestionOutline = ({
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
      d="M12.039 15.048a.75.75 0 0 1 .75.75v.007a.75.75 0 0 1-1.5 0v-.007a.75.75 0 0 1 .75-.75M9.414 10.56a2.83 2.83 0 0 1 2.837-2.837 2.835 2.835 0 0 1 2.836 2.838c0 1.114-.64 1.898-1.46 2.351l-.146.083c-.23.13-.396.224-.532.346-.128.116-.164.2-.163.316a.75.75 0 1 1-1.5.02c-.008-.661.305-1.131.66-1.45.272-.246.61-.434.838-.56l.104-.06.01-.005c.462-.255.689-.595.689-1.041 0-.743-.6-1.338-1.336-1.338a1.33 1.33 0 0 0-1.337 1.338.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.25 22.037a.7.7 0 0 1-.217-.032c-.321-.1-7.856-2.453-7.856-9.048 0-1.835-.025-3.161-.042-4.133-.044-2.434-.054-2.941.583-3.577.755-.754 6.448-2.71 7.532-2.71 1.145 0 6.765 1.937 7.534 2.712.635.64.625 1.146.581 3.582-.017.972-.041 2.3-.041 4.126 0 6.594-7.536 8.95-7.856 9.048a.7.7 0 0 1-.218.032m0-18A30 30 0 0 0 5.765 6.32c-.16.16-.166.492-.13 2.476.017.979.042 2.314.042 4.16 0 4.913 5.41 7.122 6.573 7.539 1.163-.417 6.574-2.626 6.574-7.538 0-1.843.025-3.175.042-4.152.035-1.991.029-2.323-.146-2.5-2.063-1-4.234-1.761-6.47-2.268"
    />
  </Svg>
);
export default IconlystShieldQuestionOutline;
